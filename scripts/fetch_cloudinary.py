import os
import json
import cloudinary
import cloudinary.api
from dotenv import load_dotenv

# Load environment variables from .env.local
load_dotenv('.env.local')

# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET'),
    secure=True
)

PROPERTIES = {
    "jazby": {
        "folder": "images/jazby",
        "output": "src/data/jazby-images.json"
    },
    "wildwood": {
        "folder": "images/wild-wood-cottages",
        "output": "src/data/wildwood-images.json"
  },
    "luna-light": {
        "folder": "images/luna-light",
        "output": "src/data/luna-lights-images.json"
    }
}

SECTIONS = ["bathroom", "bedroom", "exterior", "kitchen", "living-room"]

def fetch_images():
    for prop_key, prop_info in PROPERTIES.items():
        print(f"\nFetching images for {prop_key}...")
        all_data = {}
        
        for section in SECTIONS:
            folder_path = f"{prop_info['folder']}/{section}"
            print(f" Checking Asset Folder: {folder_path}...")
            
            try:
                # Use resources_by_asset_folder for modern Cloudinary folder structures
                result = cloudinary.api.resources_by_asset_folder(
                    folder_path,
                    max_results=500,
                    tags=True,
                    context=True
                )
                
                resources = result.get('resources', [])
                images = []
                for resource in resources:
                    w = resource.get('width', 1)
                    h = resource.get('height', 1)
                    images.append({
                        "url": resource['secure_url'],
                        "width": w,
                        "height": h,
                        "aspect_ratio": round(w / h, 2) if h != 0 else 1,
                        "format": resource.get('format'),
                        "public_id": resource['public_id']
                    })
                
                all_data[section] = images
                print(f" Found {len(images)} images.")
                
            except Exception as e:
                print(f" Error fetching {section} from asset folder: {e}")
                all_data[section] = []

        # Ensure directory exists
        os.makedirs(os.path.dirname(prop_info['output']), exist_ok=True)
        
        with open(prop_info['output'], 'w') as f:
            json.dump(all_data, f, indent=4)
        print(f" Saved result to {prop_info['output']}")

if __name__ == "__main__":
    fetch_images()

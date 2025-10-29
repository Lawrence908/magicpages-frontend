# Re-run everything cleanly in a single cell
from PyPDF2 import PdfReader, PdfWriter
import os
import yaml

# Paths
pdf_path = "/mnt/data/Magic Pages - Brand Guidelines.pdf"
output_dir = "/mnt/data/magic_pages_brand"
os.makedirs(output_dir, exist_ok=True)

# Load PDF
reader = PdfReader(pdf_path)

# Slice pages and record metadata
page_info = []
for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)
    page_filename = f"brand_page_{i+1:02}.pdf"
    page_path = os.path.join(output_dir, page_filename)
    with open(page_path, "wb") as f:
        writer.write(f)
    page_info.append(
        {
            "page": i + 1,
            "file": page_filename,
            "description": f"Page {i+1} from brand guidelines.",
        }
    )

# Build brand_config.yaml
brand_config = {
    "brand_name": "Magic Pages",
    "logo": {
        "description": "An open book with stars symbolizing imagination and adventure.",
        "usage": {
            "dark_background": "Use white logo",
            "light_background": "Use deep blue or black",
            "rules": [
                "Do not stretch or skew",
                "Do not rotate",
                "Do not use in single row",
                "Do not alter letter positions",
                "Do not separate logo elements",
                "Do not use unapproved colors",
                "Maintain whitespace around logo",
            ],
        },
    },
    "typography": {
        "headlines": ["Roca Bold", "Roca Regular"],
        "body": ["Instrument Sans Medium", "Instrument Sans Regular"],
        "sources": {
            "roca": "https://use.typekit.net/dvg6jnb.css",
            "instrument_sans": "https://fonts.google.com/Instrument+Sans",
        },
    },
    "colors": {
        "primary": {
            "deep_blue": "#0209AA",
            "gold": "#FAD773",
            "cream": "#FEFAEF",
            "white": "#FFFFFF",
            "black": "#000000",
        }
    },
    "aesthetic": {
        "tone": "Dreamy, magical, comforting",
        "elements": [
            "stars",
            "open book",
            "night sky",
            "soft clouds",
            "whimsical style",
        ],
    },
    "social_media": {
        "profile_pictures": ["primary", "secondary"],
        "banner_style": "Gradient with logo",
        "platforms": ["Instagram", "Facebook", "General Use"],
    },
    "pdf_slices": page_info,
}

# Save the YAML file
yaml_path = os.path.join(output_dir, "brand_config.yaml")
with open(yaml_path, "w") as f:
    yaml.dump(brand_config, f, sort_keys=False)

yaml_path, output_dir

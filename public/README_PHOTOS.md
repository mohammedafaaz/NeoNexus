# How to Replace Guest Photos

Follow these steps to replace the placeholder photos with real photos of your guests:

## Photo Preparation

1. Prepare your guest photos with these specifications:
   - Square aspect ratio (1:1)
   - Minimum resolution of 400x400 pixels
   - Professional headshot style preferred
   - PNG or JPG format
   - File size under 500KB for optimal loading

2. Name your photos clearly, for example:
   - `shiva-kumar.jpg`
   - `bhargav-ak.jpg`
   - `chetan-d.jpg`
   - etc.

## Adding Photos to the Project

### Option 1: Using the Public Folder (Recommended)

1. Create a folder in the `public` directory:
   ```
   public/images/guests/
   ```

2. Place all your guest photos in this folder.

3. Update the image paths in `src/components/ChiefGuestsSection.tsx`:
   ```js
   image: "/images/guests/shiva-kumar.jpg",
   ```

### Option 2: Using Import in the Component

If you prefer to import the images directly in the component:

1. Place your images in the `src/assets/` folder.

2. Import the images at the top of `src/components/ChiefGuestsSection.tsx`:
   ```js
   import shivaPhoto from '../assets/shiva-kumar.jpg';
   import bhargavPhoto from '../assets/bhargav-ak.jpg';
   // etc.
   ```

3. Reference the imported variables in the guests array:
   ```js
   image: shivaPhoto,
   ```

## Testing

After replacing the photos:

1. Run the application locally to verify all photos load correctly
2. Check that they display properly in the circular containers
3. Test on different screen sizes to ensure responsive behavior
4. Verify the hover effects still work as expected

If you encounter any issues with photo display, please check the image dimensions and format.

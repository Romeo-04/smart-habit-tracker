# Assets Guide for Landing Page

## Folder Structure

Create the following folder structure in your project:

```
smart-habit-tracker/
  public/
    images/
      mountain-bg.png       ← Hero section background (blue layered mountains)
      goals-icon.png        ← Target with arrow icon (pixel art style)
      streaks-icon.png      ← Flame icon (pixel art style)
      insights-icon.png     ← Chart/graph icon (pixel art style)
      cta-bg.png           ← CTA section background (winter forest with tree)
    logo.png               ← Flame logo for navbar (pixel art style)
```

## Asset Details

### 1. **logo.png** (Navbar Logo)
- **Location:** `public/logo.png`
- **Description:** Pixel art flame icon (similar to the one in your screenshots)
- **Recommended Size:** 48x48 pixels or larger (will be displayed at 48x48)
- **Style:** Red/orange/yellow gradient flame in pixel art style

### 2. **mountain-bg.png** (Hero Background)
- **Location:** `public/images/mountain-bg.png`
- **Description:** Layered blue mountains with sky and clouds
- **Recommended Size:** 1920x1080 pixels or larger
- **Style:** Blue gradient mountains (darker at front, lighter at back)
- **Colors:** Light blue sky (#87CEEB), medium blue (#5F9EA0), dark blue (#2F4F7F)

### 3. **goals-icon.png** (Goals Card Icon)
- **Location:** `public/images/goals-icon.png`
- **Description:** Target/bullseye with arrow hitting center
- **Recommended Size:** 128x128 pixels
- **Style:** Pixel art with blue/red target circles and green arrow
- **Colors:** Blue outer ring, red center, green arrow

### 4. **streaks-icon.png** (Streaks Card Icon)
- **Location:** `public/images/streaks-icon.png`
- **Description:** Flame icon (similar to navbar logo)
- **Recommended Size:** 128x128 pixels
- **Style:** Pixel art flame
- **Colors:** Red base, orange/yellow gradient towards top

### 5. **insights-icon.png** (Insights Card Icon)
- **Location:** `public/images/insights-icon.png`
- **Description:** Bar chart or line graph going upward
- **Recommended Size:** 128x128 pixels
- **Style:** Pixel art with black bars/lines and arrow
- **Colors:** Black chart bars with upward trending arrow

### 6. **cta-bg.png** (CTA Section Background)
- **Location:** `public/images/cta-bg.png`
- **Description:** Winter forest scene with prominent evergreen tree
- **Recommended Size:** 1920x600 pixels or larger
- **Style:** Blue/teal gradient with dark silhouette trees
- **Colors:** Light blue sky (#ADD8E6), teal gradient, dark blue/black trees

## Creating the Assets

### Option 1: Use Existing Pixel Art
If you have the original assets from the screenshots, simply save them to the locations above.

### Option 2: Create Your Own
You can create pixel art using:
- **Piskel** (https://www.piskelapp.com/) - Free online pixel art editor
- **Aseprite** - Professional pixel art tool
- **GIMP** with grid enabled - Free image editor

### Option 3: Use Placeholders
For testing, you can use placeholder images:
```bash
# Create the images folder
mkdir public\images

# You can use solid colors or gradients as temporary backgrounds
# Then replace them with actual pixel art assets later
```

## Color Palette (from screenshots)

- **Navy/Brown Text:** #5C3D2E
- **Blue Sky:** #87CEEB, #ADD8E6
- **Mountain Blues:** #2F4F7F, #5F9EA0, #87CEEB
- **Button Blue:** #3B82F6 (hover: #2563EB)
- **Card Background:** Gradient from #F3F4F6 to #D1D5DB
- **Accent Border:** #60A5FA

## Next Steps

1. Create the `public/images/` folder
2. Add your pixel art assets to the appropriate locations
3. If assets are missing, the page will show broken image icons
4. Test the page with `npm run dev`
5. Replace placeholder assets with final artwork before deployment

## Tips

- Keep file sizes small (optimize PNGs)
- Use transparent backgrounds for icons
- Maintain consistent pixel art style across all icons
- Ensure backgrounds are high resolution for modern displays

# 📱 Mobile Header Button (Hamburger Menu)

This small script automatically creates a responsive "hamburger" button (with 3 bars) for mobile navigation.  
It injects all styles directly via JavaScript, so **no external CSS file is required**.

---

## 🚀 How to Use

1. **Add the button to your HTML**:

```html
<button class="header-mobile-button" type="button"></button>
```

2. **Add the script with `defer` in the header of your HTML**:

```html
<script src="" defer></script>
```

3. **Use `.nav-bar` as the class for your navigation container** and `.nav-link` for the links:

```html
<nav class="nav-bar">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
</nav>
```

The button will automatically toggle the menu open and closed on mobile screens.

---

## 🎨 Color Customization

You can customize the appearance by overriding the default styles in your own CSS.  
Since the styles are injected via JavaScript, use `!important` to make sure your styles take precedence.

### 🔸 Change the color of the hamburger bars:

```css
.header-mobile-button span {
  background-color: red !important;
}

---

## 📱 Responsiveness

- The `.header-mobile-button` appears only on screens **smaller than 991px**.
- The `.nav-bar` navigation collapses automatically on screens **smaller than 768px** and switches to a vertical layout.
- The button toggles the `.header-mobile-button-active` class to animate into an "X" icon.

---

## ✅ Benefits

- ✅ No dependencies
- ✅ CSS is included automatically
- ✅ Smooth animations and responsive design built-in
- ✅ Easy integration via CDN

---

Credits to [@deigo-lps](https://github.com/deigo-lps)

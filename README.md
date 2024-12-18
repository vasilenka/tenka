# Tenka

The foundation for your system

## Installation

```bash
npm install tenka
// or
yarn add tenka
```

## Tokens

```css
// Text Primary
--tenka-text-primary: #222222;
--tenka-text-primary-inverse: #ffffff;
--tenka-text-primary-hover: #000000;
--tenka-text-primary-disabled: #a6a6a6;

// Text Secondary
--tenka-text-secondary: #6a6a6a;
--tenka-text-secondary-disabled: #dddddd;

// Background Primary
--tenka-bg-primary: #ffffff;
--tenka-bg-primary-inverse: #000000;
--tenka-bg-primary-inverse-hover: #222222;
--tenka-bg-primary-inverse-pressed: #4b4b4b;
--tenka-bg-primary-inverse-disabled: #f3f3f3;

// Background Secondary
--tenka-bg-secondary: #f3f3f3;
--tenka-bg-secondary-inverse: #000000;
--tenka-bg-secondary-inverse-hover: #dddddd;
--tenka-bg-secondary-inverse-pressed: #c6c6c6;
--tenka-bg-secondary-inverse-disabled: #f3f3f3;

// Border
--tenka-field-border-primary: #e0e0e0;
--tenka-field-border-active: #272727;

// Error
--tenka-text-error: #d40029;
--tenka-text-error-hover: #b80024;
--tenka-text-error-inverse: #fff8f6;
--tenka-text-error-inverse-hover: #ffffff;
--tenka-text-error-secondary: #b80024;
--tenka-border-error: #d40029;
--tenka-bg-error: #fff8f6;
--tenka-bg-error-inverse: #d40029;
--tenka-bg-error-inverse-hover: #b80024;
--tenka-bg-error-inverse-pressed: #94001d;
--tenka-bg-error-secondary: #ffdfd9;
--tenka-icon-error: #d40029;
--tenka-icon-error-hover: #b80024;

// Success
--tenka-text-success: #008384;
--tenka-text-success-hover: #006266;
--tenka-text-success-inverse: #f5ffff;
--tenka-text-success-inverse-hover: #ffffff;
--tenka-text-success-secondary: #006266;
--tenka-border-success: #008384;
--tenka-bg-success: #f5ffff;
--tenka-bg-success-inverse: #008384;
--tenka-bg-success-inverse-hover: #008384;
--tenka-bg-success-inverse-pressed: #008384;
--tenka-bg-success-secondary: #dbfeff;
--tenka-icon-success: #60b6b5;
--tenka-icon-success-hover: #008384;

// Warning
--tenka-text-warning: #b86200;
--tenka-text-warning-hover: #944f00;
--tenka-text-warning-inverse: #fffbf6;
--tenka-text-warning-inverse-hover: #ffffff;
--tenka-text-warning-secondary: #944f00;
--tenka-border-warning: #b86200;
--tenka-bg-warning: #fffbf6;
--tenka-bg-warning-inverse: #e07912;
--tenka-bg-warning-inverse-hover: #e07912;
--tenka-bg-warning-inverse-pressed: #e07912;
--tenka-bg-warning-secondary: #ffedd9;
--tenka-icon-warning: #e07912;
--tenka-icon-warning-hover: #b86200;

// Info
--tenka-text-info: #460479;
--tenka-text-info-hover: #390363;
--tenka-text-info-inverse: #fbf5ff;
--tenka-text-info-inverse-hover: #ffffff;
--tenka-text-info-secondary: #390363;
--tenka-border-info: #460479;
--tenka-bg-info: #fbf5ff;
--tenka-bg-info-inverse: #460479;
--tenka-bg-info-inverse-hover: #460479;
--tenka-bg-info-inverse-pressed: #460479;
--tenka-bg-info-secondary: #efdcfe;
--tenka-icon-info: #5e05a3;
--tenka-icon-info-hover: #460479;

// Color Pallete
--tenka-pallete-dark-100: #000000;
--tenka-pallete-dark-90: #000100;
--tenka-pallete-dark-80: #222222;
--tenka-pallete-dark-70: #484848;
--tenka-pallete-dark-60: #767676;
--tenka-pallete-dark-50: #8f8f8f;
--tenka-pallete-dark-40: #cccccc;
--tenka-pallete-dark-30: #e0e0e0;
--tenka-pallete-dark-20: #ebebeb;
--tenka-pallete-dark-10: #f5f5f5;
--tenka-pallete-dark-05: #f8f8f8;
```

### Border Radius

```css
--tenka-radius-none: 0px;
--tenka-radius-xs: 4px; // small components, e.g. badges, tags
--tenka-radius-s: 8px; // for components nested inside other container, e.g. buttons, input field
--tenka-radius-m: 12px; // most common used, medium sized components e.g. cards, banners
--tenka-radius-l: 16px; // large container components, e.g. dialog, sheet

// Semantic Token
--tenka-radius-rounded: 9999999px;
--tenka-radius-full: 9999999px;
--tenka-radius-field: 8px;
--tenka-radius-card: 12px;
```

### Box Shadow

```css
--tenka-shadow-shallow-above: 0px -4px 16px 0px rgba(0, 0, 0, 0.12);
--tenka-shadow-shallow-below: 0px 4px 16px 0px rgba(0, 0, 0, 0.12);
--tenka-shadow-medium-above: 0px -6px 20px 0px rgba(0, 0, 0, 0.2);
--tenka-shadow-medium-below: 0px 6px 20px 0px rgba(0, 0, 0, 0.2);
--tenka-shadow-deep-above: 0px -16px 48px 0px rgba(0, 0, 0, 0.22);
--tenka-shadow-deep-below: 0px 16px 48px 0px rgba(0, 0, 0, 0.22);
--tenka-shadow-card: 0px 4px 4px rgba(0, 0, 0, 0.25);
--tenka-shadow-drop-shadow: 0px 1px 10px #bfbfbf;
```

## Acknowledgements

- reach.ui
- SEEK OSS Styleguide
- Stitches

## License

MIT

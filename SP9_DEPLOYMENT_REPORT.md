# SP9 Deployment Report

## Deployment

- Repository: `https://github.com/jafhdr/jafhdr.github.io`
- Branch: `main`
- Screenshot commit: `8b10d33c8a14072c71e15d8ab79ec586185cdc05`
- GitHub Actions run: `41403083886`
- Workflow: `Deploy to GitHub Pages`
- Build status: successful
- Deploy status: successful

## Published Files

- `src/pages/projects/sistem-prediksi-jumlah-siswa.astro`
- `public/images/projects/sistem-prediksi-jumlah-siswa/landing-page.png`
- `public/images/projects/sistem-prediksi-jumlah-siswa/login-page.png`
- `public/images/projects/sistem-prediksi-jumlah-siswa/dashboard-page.png`
- `public/images/projects/sistem-prediksi-jumlah-siswa/upload-csv-page.png`
- `public/images/projects/sistem-prediksi-jumlah-siswa/loading-prediction.png`
- `public/images/projects/sistem-prediksi-jumlah-siswa/result-prediction-page.png`

## GitHub Actions Verification

The `Deploy to GitHub Pages` workflow run completed successfully. Both the build and deploy jobs finished with successful conclusions.

## Public Website Verification

- Student-prediction case study: HTTP 200
  - `https://jafhdr.github.io/projects/sistem-prediksi-jumlah-siswa/`
- CTI App case study: HTTP 200
  - `https://jafhdr.github.io/projects/cti-app/`
- All six screenshot URLs returned HTTP 200 as PNG images.
- The deployed HTML contains all six image paths and alt attributes.
- Captions are present in Indonesian.
- The return-to-projects navigation link is present.
- The prediction-result screenshot is presented as workflow evidence, not as evidence of model accuracy.

## Image Verification

All six PNG files were readable and had valid PNG formats and reasonable website file sizes. The verified dimensions were:

| Image | Dimensions | Size |
|---|---:|---:|
| Dashboard | 1620 x 768 | 658,853 bytes |
| Landing | 1620 x 768 | 850,284 bytes |
| Loading | 1620 x 768 | 489,725 bytes |
| Login | 1526 x 768 | 975,526 bytes |
| Result | 771 x 768 | 104,703 bytes |
| Upload | 1549 x 768 | 600,659 bytes |

The screenshots contained no credentials or identified private user data.

## Validation

- Astro build passed and generated the expected routes.
- `git diff --check` passed.
- The local `main` branch matched `origin/main` after the screenshot commit.
- Repository changes were limited to the case-study source and screenshot directory.
- No PHP, Flask, database, or LSTM files were changed.

## Unresolved Items

- No unresolved deployment failures remain.
- Final browser console and responsive-gallery verification should be performed in an interactive browser session when browser sharing is available.

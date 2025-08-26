# Tools Logo Instructions

## Cara Menambahkan Logo Tools

Untuk menambahkan logo tools ke portfolio, ikuti langkah berikut:

### 1. Siapkan Logo
- Format: PNG atau SVG (PNG direkomendasikan untuk transparansi)
- Ukuran: Minimal 80x80px, optimal 120x120px
- Background: Transparan atau sesuai tema portfolio

### 2. Nama File yang Diperlukan
Buat file dengan nama berikut dan simpan di folder ini:

```
photoshop-logo.png      - Logo Adobe Photoshop
illustrator-logo.png    - Logo Adobe Illustrator  
premiere-logo.png       - Logo Adobe Premiere Pro
resolve-logo.png        - Logo DaVinci Resolve
canva-logo.png          - Logo Canva
figma-logo.png          - Logo Figma
```

### 3. Sumber Logo
Anda bisa mendapatkan logo dari:
- Website resmi Adobe: https://www.adobe.com/
- Website resmi DaVinci Resolve: https://www.blackmagicdesign.com/
- Website resmi Canva: https://www.canva.com/
- Website resmi Figma: https://www.figma.com/

### 4. Tips Logo
- Gunakan logo resmi dari brand
- Pastikan logo terlihat jelas di background gelap
- Jika logo terlalu terang, bisa diatur brightness di CSS
- Logo sebaiknya memiliki background transparan

### 5. Setelah Menambahkan Logo
- Refresh halaman portfolio
- Logo akan muncul otomatis di section Tools & Software
- Hover effect akan membuat logo lebih terang

### 6. Menambah Tools Baru
Jika ingin menambah tools baru:
1. Tambahkan logo ke folder ini
2. Edit file `index.html` di section Tools & Software
3. Tambahkan CSS styling jika diperlukan

## Struktur Folder
```
Photo/
├── tools/
│   ├── photoshop-logo.png
│   ├── illustrator-logo.png
│   ├── premiere-logo.png
│   ├── resolve-logo.png
│   ├── canva-logo.png
│   ├── figma-logo.png
│   └── README.md
├── Photography/
├── Design/
└── ...
```

## Catatan
- Logo yang tidak ada akan menampilkan error image
- Pastikan semua logo sudah ditambahkan sebelum deploy
- Logo akan otomatis responsive di berbagai ukuran layar

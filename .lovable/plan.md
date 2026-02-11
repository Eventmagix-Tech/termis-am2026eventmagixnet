

## "Our Journey" Bolumunu Hero Gorsel Formatina Donusturme

Mevcut timeline bolumunu, arka planda buyuk bir gorsel ile uzerinde icerik gorunen bir hero-tarzinda bolume donusturecegiz. Timeline icerigi korunacak, ancak arka planda New Orleans temasina uygun bir gorsel ve uzerinde yari saydam katman olacak.

### Yapilacak Degisiklikler

**Dosya: `src/components/TimelineSection.tsx`**

1. Mevcut `bg-hero-gradient` arka planini kaldirilacak
2. Yerine arka plan gorseli eklenecek (mevcut projede bulunan `new-orleans-venue.jpg` veya `termis-hero-banner.jpg` kullanilabilir)
3. Gorsel uzerine koyu gradient overlay eklenecek (icerik okunurlugunun korunmasi icin)
4. Section yuksekligi arttirilacak, tam ekran hissi vermesi icin `min-h-[70vh]` gibi bir deger uygulanacak
5. Arka plan gorseli `background-size: cover`, `background-position: center`, `background-attachment: fixed` ile parallax efekti verilecek
6. Dekoratif kopru SVG illustrasyonu korunacak

### Teknik Detaylar

- Arka plan gorseli import edilecek ve `style` prop ile uygulanacak
- Overlay icin `absolute inset-0` pozisyonlu bir `div` ile `bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85` uygulanacak
- Icerik `relative z-10` ile overlay ustunde gorunecek
- Timeline kartlari ve node'larin renkleri beyaz/gold tonlarinda kalacak (mevcut `text-primary-foreground` siniflari zaten uygun)
- Alt kisimda HeroSection'daki gibi animasyonlu dalga ayirici (wave divider) eklenecek


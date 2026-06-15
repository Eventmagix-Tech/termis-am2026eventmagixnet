## Hedef
Call for Abstracts sayfasındaki "The abstract submission deadline has passed..." mesaj kutusuna, dikkat çekmek için altın renkli (gold) bir lazer süpürme animasyonu eklemek.

## Mevcut Durum
- `src/pages/CallForAbstracts.tsx` içinde satır 45-50 arasında altın rengi çerçeveli bir bilgi kutusu var:
```tsx
<div className="text-center mb-10 p-6 bg-gold/20 border-2 border-gold rounded-xl">
  <p className="text-foreground font-semibold text-base md:text-lg">
    The abstract submission deadline has passed...
  </p>
</div>
```
- Proje Framer Motion kullanıyor ancak dekoratif animasyonlar için CSS keyframes de mevcut (`src/index.css` içinde `animate-shimmer`, `animate-pulse-glow` vb.)

## Teknik Yaklaşım
Animasyonu saf CSS ile uygulayacağız (Framer Motion'a gerek yok, daha hafif):

1. **`src/index.css`** içine yeni `@keyframes laser-sweep` tanımlanacak:
   - Yatay veya hafif eğimli (`skew-x-12`) bir gradyan çizgi
   - Kutunun solundan sağına doğru hareket edecek
   - Parlak altın rengi (`#D4AF37` / `hsl(var(--accent))`) ile beyaz parıltı merkezi
   - Opacity pulse efekti ile daha dramatik görünüm
   - Sürekli tekrar (`infinite`), yaklaşık 3 saniyelik periyot

2. **`.animate-laser-sweep` utility class** eklenecek

3. **`src/pages/CallForAbstracts.tsx`** içindeki bilgi kutusu:
   - `relative overflow-hidden` ile güncellenecek (lazerin taşmaması için)
   - İçine bir `<div className="animate-laser-sweep ...">` eklenerek pseudo-element veya absolute-positioned gradient çizgi yerleştirilecek
   - Lazer, arka planda gezsin, yazıların üzerine çıkmasın (`z-index` yönetimi)

## Animasyon Detayları
- Lazer rengi: Altın (gold) tonları, beyaz parıltılı merkez
- Hız: ~3 saniyelik periyot, sürekli döngü
- Yön: Soldan sağa yatay süpürme
- Konum: Çerçevenin iç kenarından geçebilir veya kutunun tam ortasından
- Opacity: 0.6 - 1.0 arası pulse

## Dosyalar
- `src/index.css` — yeni keyframes ve utility class
- `src/pages/CallForAbstracts.tsx` — bilgi kutusu container güncellemesi + lazer elementi

## Çıkarılacak Sonuç
Sayfa yüklendiğinde bilgi kutusunun üzerinden periyodik olarak parlak bir altın lazer çizgisi geçerek kullanıcının dikkatini mesaja çekecek.
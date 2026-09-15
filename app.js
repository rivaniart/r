// Rivani Fine Art — Main Application Logic
(function () {
  'use strict';

  // Safe Storage Wrapper
  var memoryStorage = {};
  var storage = {
    get: function (key, def) {
      try {
        var item = localStorage.getItem(key);
        return item ? JSON.parse(item) : def;
      } catch (e) {
        return memoryStorage[key] || def;
      }
    },
    set: function (key, val) {
      try {
        localStorage.setItem(key, JSON.stringify(val));
      } catch (e) {
        memoryStorage[key] = val;
      }
    }
  };

  // Canonical Collection Dataset (48 Verified & Documented Artworks)
  var fallbackArtworks = [
  {
    "id": 1,
    "canonical_id": 1,
    "primary_card_id": 1,
    "card_ids": [
      1
    ],
    "title": "Warm Geometry I",
    "canonical_title": "Warm Geometry I",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Acrylic and texture on canvas",
    "support": "canvas",
    "dimensions": "120 × 90 cm (47 × 35 in)",
    "height_cm": 120,
    "width_cm": 90,
    "height_in": 47,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Slim shadow-gap frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte / ebonized",
    "mount_liner": "None",
    "framed_description": "Black Wood Slim shadow-gap frame",
    "framed_dimensions": "128 × 98 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Warm Geometry I is an original abstract work executed in acrylic and texture on canvas. Presented in a black wood slim shadow-gap frame. Title and medium proposed from the visible geometric composition; size estimated from proportions.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_1.jpg",
    "primary_image": "assets/images/image_1.jpg",
    "views": [
      "assets/images/image_1.jpg"
    ],
    "notes": "Title and medium proposed from the visible geometric composition; size estimated from proportions.",
    "slug": "warm-geometry-i"
  },
  {
    "id": 2,
    "canonical_id": 2,
    "primary_card_id": 2,
    "card_ids": [
      2
    ],
    "title": "Seated Figure in Ultramarine & Rose",
    "canonical_title": "Seated Figure in Ultramarine & Rose",
    "source_title": "Seated Figure in Ultramarine & Rose",
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Portrait",
    "medium": "Oil and pigment on fine Belgian linen",
    "support": "fine Belgian linen",
    "dimensions": "132 × 102 cm (52 × 40 in)",
    "height_cm": 132,
    "width_cm": 102,
    "height_in": 52,
    "width_in": 40,
    "panel_count": 1,
    "frame_type": "Simple gallery frame",
    "frame_material": "Teak",
    "frame_colour": "Medium brown",
    "frame_finish": "Natural teak",
    "mount_liner": "None",
    "framed_description": "Medium brown Teak Simple gallery frame",
    "framed_dimensions": "140 × 110 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Seated Figure in Ultramarine & Rose is an original figurative work executed in oil and pigment on fine belgian linen. Presented in a medium brown teak simple gallery frame. Exact title, medium/support, artwork size, frame material and price taken from the supplied close-up card.",
    "verification_status": "verified",
    "duplicate_group": null,
    "image": "assets/images/image_2.jpg",
    "primary_image": "assets/images/image_2.jpg",
    "views": [
      "assets/images/image_2.jpg"
    ],
    "notes": "Exact title, medium/support, artwork size, frame material and price taken from the supplied close-up card.",
    "slug": "seated-figure-in-ultramarine-rose"
  },
  {
    "id": 3,
    "canonical_id": 3,
    "primary_card_id": 3,
    "card_ids": [
      3
    ],
    "title": "Valley After Rain",
    "canonical_title": "Valley After Rain",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "90 × 120 cm (35 × 47 in)",
    "height_cm": 90,
    "width_cm": 120,
    "height_in": 35,
    "width_in": 47,
    "panel_count": 1,
    "frame_type": "Slim float frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown / charcoal",
    "frame_finish": "Satin wood",
    "mount_liner": "None",
    "framed_description": "Dark brown / charcoal Wood Slim float frame",
    "framed_dimensions": "98 × 128 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Valley After Rain is an original landscape work executed in oil on canvas. Presented in a dark brown / charcoal wood slim float frame. Landscape title proposed; size estimated from the painting's horizontal proportions.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_3.jpg",
    "primary_image": "assets/images/image_3.jpg",
    "views": [
      "assets/images/image_3.jpg"
    ],
    "notes": "Landscape title proposed; size estimated from the painting's horizontal proportions.",
    "slug": "valley-after-rain"
  },
  {
    "id": 4,
    "canonical_id": 4,
    "primary_card_id": 4,
    "card_ids": [
      4
    ],
    "title": "Red, Blue & Gold Construct",
    "canonical_title": "Red, Blue & Gold Construct",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Mixed media on canvas",
    "support": "canvas",
    "dimensions": "140 × 90 cm (55 × 35 in)",
    "height_cm": 140,
    "width_cm": 90,
    "height_in": 55,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Slim float frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Slim float frame",
    "framed_dimensions": "148 × 98 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Red, Blue & Gold Construct is an original abstract work executed in mixed media on canvas. Presented in a black wood slim float frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_4.jpg",
    "primary_image": "assets/images/image_4.jpg",
    "views": [
      "assets/images/image_4.jpg"
    ],
    "notes": "",
    "slug": "red-blue-gold-construct"
  },
  {
    "id": 5,
    "canonical_id": 5,
    "primary_card_id": 5,
    "card_ids": [
      5
    ],
    "title": "Sacred Cows on Indigo",
    "canonical_title": "Sacred Cows on Indigo",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Traditional / Folk",
    "orientation": "Landscape",
    "medium": "Gouache and mineral pigment on cloth",
    "support": "cloth",
    "dimensions": "90 × 120 cm (35 × 47 in)",
    "height_cm": 90,
    "width_cm": 120,
    "height_in": 35,
    "width_in": 47,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Gold + deep blue",
    "frame_finish": "Antiqued / carved",
    "mount_liner": "None",
    "framed_description": "Gold + deep blue Carved wood Ornate moulded frame",
    "framed_dimensions": "112 × 142 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Sacred Cows on Indigo is an original traditional / folk work executed in gouache and mineral pigment on cloth. Presented in a gold + deep blue carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_5.jpg",
    "primary_image": "assets/images/image_5.jpg",
    "views": [
      "assets/images/image_5.jpg"
    ],
    "notes": "",
    "slug": "sacred-cows-on-indigo"
  },
  {
    "id": 6,
    "canonical_id": 6,
    "primary_card_id": 6,
    "card_ids": [
      6
    ],
    "title": "The Royal Prince II",
    "canonical_title": "The Royal Prince II",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Still Life",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "120 × 80 cm (47 × 31 in)",
    "height_cm": 120,
    "width_cm": 80,
    "height_in": 47,
    "width_in": 31,
    "panel_count": 1,
    "frame_type": "Museum-profile ornate frame",
    "frame_material": "Carved wood",
    "frame_colour": "Gold",
    "frame_finish": "Antiqued gilt",
    "mount_liner": "None",
    "framed_description": "Gold Carved wood Museum-profile ornate frame",
    "framed_dimensions": "142 × 102 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "The Royal Prince II is an original still life work executed in oil on canvas. Presented in a gold carved wood museum-profile ornate frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_6.jpg",
    "primary_image": "assets/images/image_6.jpg",
    "views": [
      "assets/images/image_6.jpg"
    ],
    "notes": "",
    "slug": "the-royal-prince-ii"
  },
  {
    "id": 7,
    "canonical_id": 7,
    "primary_card_id": 7,
    "card_ids": [
      7
    ],
    "title": "Procession at Sunset",
    "canonical_title": "Procession at Sunset",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Landscape",
    "medium": "Oil and acrylic on canvas",
    "support": "canvas",
    "dimensions": "95 × 120 cm (37 × 47 in)",
    "height_cm": 95,
    "width_cm": 120,
    "height_in": 37,
    "width_in": 47,
    "panel_count": 1,
    "frame_type": "Classic gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown",
    "frame_finish": "Walnut / espresso",
    "mount_liner": "None",
    "framed_description": "Dark brown Wood Classic gallery frame",
    "framed_dimensions": "105 × 130 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Procession at Sunset is an original figurative work executed in oil and acrylic on canvas. Presented in a dark brown wood classic gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_7.jpg",
    "primary_image": "assets/images/image_7.jpg",
    "views": [
      "assets/images/image_7.jpg"
    ],
    "notes": "",
    "slug": "procession-at-sunset"
  },
  {
    "id": 8,
    "canonical_id": 8,
    "primary_card_id": 8,
    "card_ids": [
      8
    ],
    "title": "Courtly Procession Panel",
    "canonical_title": "Courtly Procession Panel",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Traditional / Figurative",
    "orientation": "Landscape",
    "medium": "Tempera and gouache on paper",
    "support": "paper",
    "dimensions": "91 × 259 cm (36 × 102 in)",
    "height_cm": 91,
    "width_cm": 259,
    "height_in": 36,
    "width_in": 102,
    "panel_count": 1,
    "frame_type": "Broad classic frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown / bronze",
    "frame_finish": "Aged / carved",
    "mount_liner": "Warm ivory liner",
    "framed_description": "Dark brown / bronze Wood Broad classic frame",
    "framed_dimensions": "99 × 267 cm",
    "price": "₹1,80,000",
    "price_inr": 180000,
    "description": "Courtly Procession Panel is an original traditional / figurative work executed in tempera and gouache on paper. Presented in a dark brown / bronze wood broad classic frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_8.jpg",
    "primary_image": "assets/images/image_8.jpg",
    "views": [
      "assets/images/image_8.jpg"
    ],
    "notes": "",
    "slug": "courtly-procession-panel"
  },
  {
    "id": 9,
    "canonical_id": 9,
    "primary_card_id": 9,
    "card_ids": [
      9
    ],
    "title": "Woman in Cobalt Sari",
    "canonical_title": "Woman in Cobalt Sari",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "110 × 80 cm (43 × 31 in)",
    "height_cm": 110,
    "width_cm": 80,
    "height_in": 43,
    "width_in": 31,
    "panel_count": 1,
    "frame_type": "Classic ornate frame",
    "frame_material": "Carved wood",
    "frame_colour": "Antique gold",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Antique gold Carved wood Classic ornate frame",
    "framed_dimensions": "130 × 100 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Woman in Cobalt Sari is an original figurative work executed in oil on canvas. Presented in a antique gold carved wood classic ornate frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_9.jpg",
    "primary_image": "assets/images/image_9.jpg",
    "views": [
      "assets/images/image_9.jpg"
    ],
    "notes": "",
    "slug": "woman-in-cobalt-sari"
  },
  {
    "id": 10,
    "canonical_id": 10,
    "primary_card_id": 10,
    "card_ids": [
      10,
      23
    ],
    "title": "Four Studies of Everyday Life",
    "canonical_title": "Four Studies of Everyday Life",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Works on Paper",
    "orientation": "4-piece set",
    "medium": "Ink and watercolour on paper",
    "support": "paper",
    "dimensions": "35 × 25 cm (14 × 10 in)",
    "height_cm": 35,
    "width_cm": 25,
    "height_in": 14,
    "width_in": 10,
    "panel_count": 4,
    "frame_type": "Slim gallery frames",
    "frame_material": "Walnut wood",
    "frame_colour": "Dark brown",
    "frame_finish": "Walnut",
    "mount_liner": "Wide ivory mounts",
    "framed_description": "Dark brown Walnut wood Slim gallery frames",
    "framed_dimensions": "52 × 132 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Four Studies of Everyday Life is an original works on paper work executed in ink and watercolour on paper. Presented in a dark brown walnut wood slim gallery frames. Artwork dimensions are per sheet; framed size is the overall four-work arrangement.",
    "verification_status": "verified_tier",
    "duplicate_group": "D02",
    "image": "assets/images/image_10.jpg",
    "primary_image": "assets/images/image_10.jpg",
    "views": [
      "assets/images/image_10.jpg",
      "assets/images/image_23.jpg"
    ],
    "notes": "Artwork dimensions are per sheet; framed size is the overall four-work arrangement.",
    "slug": "four-studies-of-everyday-life"
  },
  {
    "id": 11,
    "canonical_id": 11,
    "primary_card_id": 11,
    "card_ids": [
      11,
      22
    ],
    "title": "Monsoon Garden",
    "canonical_title": "Monsoon Garden",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Near-square",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "90 × 100 cm (35 × 39 in)",
    "height_cm": 90,
    "width_cm": 100,
    "height_in": 35,
    "width_in": 39,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Gold",
    "frame_finish": "Rich antiqued gilt",
    "mount_liner": "None",
    "framed_description": "Gold Carved wood Ornate moulded frame",
    "framed_dimensions": "112 × 122 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Monsoon Garden is an original landscape work executed in oil on canvas. Presented in a gold carved wood ornate moulded frame. Repeated artwork; normalized to identical catalogue data across Cards 11, 22.",
    "verification_status": "verified_tier",
    "duplicate_group": "D01",
    "image": "assets/images/image_11.jpg",
    "primary_image": "assets/images/image_11.jpg",
    "views": [
      "assets/images/image_11.jpg",
      "assets/images/image_22.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 11, 22.",
    "slug": "monsoon-garden"
  },
  {
    "id": 12,
    "canonical_id": 12,
    "primary_card_id": 12,
    "card_ids": [
      12
    ],
    "title": "Breaking Tide",
    "canonical_title": "Breaking Tide",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Seascape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "80 × 100 cm (31 × 39 in)",
    "height_cm": 80,
    "width_cm": 100,
    "height_in": 31,
    "width_in": 39,
    "panel_count": 1,
    "frame_type": "Classic moulded frame",
    "frame_material": "Wood",
    "frame_colour": "Gold + dark inner slip",
    "frame_finish": "Antiqued",
    "mount_liner": "None",
    "framed_description": "Gold + dark inner slip Wood Classic moulded frame",
    "framed_dimensions": "98 × 118 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Breaking Tide is an original seascape work executed in oil on canvas. Presented in a gold + dark inner slip wood classic moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_12.jpg",
    "primary_image": "assets/images/image_12.jpg",
    "views": [
      "assets/images/image_12.jpg"
    ],
    "notes": "",
    "slug": "breaking-tide"
  },
  {
    "id": 13,
    "canonical_id": 13,
    "primary_card_id": 13,
    "card_ids": [
      13
    ],
    "title": "Garden in Bloom",
    "canonical_title": "Garden in Bloom",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "90 × 110 cm (35 × 43 in)",
    "height_cm": 90,
    "width_cm": 110,
    "height_in": 35,
    "width_in": 43,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Antique gold",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Antique gold Carved wood Ornate moulded frame",
    "framed_dimensions": "112 × 132 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Garden in Bloom is an original landscape work executed in oil on canvas. Presented in a antique gold carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_13.jpg",
    "primary_image": "assets/images/image_13.jpg",
    "views": [
      "assets/images/image_13.jpg"
    ],
    "notes": "",
    "slug": "garden-in-bloom"
  },
  {
    "id": 14,
    "canonical_id": 14,
    "primary_card_id": 14,
    "card_ids": [
      14
    ],
    "title": "Green Valley",
    "canonical_title": "Green Valley",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "85 × 110 cm (33 × 43 in)",
    "height_cm": 85,
    "width_cm": 110,
    "height_in": 33,
    "width_in": 43,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Antique gold",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Antique gold Carved wood Ornate moulded frame",
    "framed_dimensions": "107 × 132 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Green Valley is an original landscape work executed in oil on canvas. Presented in a antique gold carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_14.jpg",
    "primary_image": "assets/images/image_14.jpg",
    "views": [
      "assets/images/image_14.jpg"
    ],
    "notes": "",
    "slug": "green-valley"
  },
  {
    "id": 15,
    "canonical_id": 15,
    "primary_card_id": 15,
    "card_ids": [
      15
    ],
    "title": "Golden Figure Mosaic",
    "canonical_title": "Golden Figure Mosaic",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative / Decorative",
    "orientation": "Portrait",
    "medium": "Oil, acrylic and metallic pigment on canvas",
    "support": "canvas",
    "dimensions": "110 × 80 cm (43 × 31 in)",
    "height_cm": 110,
    "width_cm": 80,
    "height_in": 43,
    "width_in": 31,
    "panel_count": 1,
    "frame_type": "Box frame",
    "frame_material": "Wood",
    "frame_colour": "Champagne gold",
    "frame_finish": "Satin",
    "mount_liner": "None",
    "framed_description": "Champagne gold Wood Box frame",
    "framed_dimensions": "122 × 92 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Golden Figure Mosaic is an original figurative / decorative work executed in oil, acrylic and metallic pigment on canvas. Presented in a champagne gold wood box frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_15.jpg",
    "primary_image": "assets/images/image_15.jpg",
    "views": [
      "assets/images/image_15.jpg"
    ],
    "notes": "",
    "slug": "golden-figure-mosaic"
  },
  {
    "id": 16,
    "canonical_id": 16,
    "primary_card_id": 16,
    "card_ids": [
      16
    ],
    "title": "Srinathjee in a Flowering Garden",
    "canonical_title": "Srinathjee in a Flowering Garden",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Traditional / Pichwai",
    "orientation": "Portrait",
    "medium": "Natural pigment and gouache on cloth",
    "support": "cloth",
    "dimensions": "115 × 90 cm (45 × 35 in)",
    "height_cm": 115,
    "width_cm": 90,
    "height_in": 45,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Antique gold",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Antique gold Carved wood Ornate moulded frame",
    "framed_dimensions": "137 × 112 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Srinathjee in a Flowering Garden is an original traditional / pichwai work executed in natural pigment and gouache on cloth. Presented in a antique gold carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_16.jpg",
    "primary_image": "assets/images/image_16.jpg",
    "views": [
      "assets/images/image_16.jpg"
    ],
    "notes": "",
    "slug": "srinathjee-in-a-flowering-garden"
  },
  {
    "id": 17,
    "canonical_id": 17,
    "primary_card_id": 17,
    "card_ids": [
      17
    ],
    "title": "Earth, Rust & Slate",
    "canonical_title": "Earth, Rust & Slate",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Landscape",
    "medium": "Acrylic and texture on canvas",
    "support": "canvas",
    "dimensions": "100 × 160 cm (39 × 63 in)",
    "height_cm": 100,
    "width_cm": 160,
    "height_in": 39,
    "width_in": 63,
    "panel_count": 1,
    "frame_type": "Slim shadow-gap frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Slim shadow-gap frame",
    "framed_dimensions": "108 × 168 cm",
    "price": "₹1,50,000",
    "price_inr": 150000,
    "description": "Earth, Rust & Slate is an original abstract work executed in acrylic and texture on canvas. Presented in a black wood slim shadow-gap frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_17.jpg",
    "primary_image": "assets/images/image_17.jpg",
    "views": [
      "assets/images/image_17.jpg"
    ],
    "notes": "",
    "slug": "earth-rust-slate"
  },
  {
    "id": 18,
    "canonical_id": 18,
    "primary_card_id": 18,
    "card_ids": [
      18
    ],
    "title": "Mountain Pass at Dawn",
    "canonical_title": "Mountain Pass at Dawn",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "70 × 90 cm (28 × 35 in)",
    "height_cm": 70,
    "width_cm": 90,
    "height_in": 28,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Antique gold",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Antique gold Carved wood Ornate moulded frame",
    "framed_dimensions": "90 × 110 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Mountain Pass at Dawn is an original landscape work executed in oil on canvas. Presented in a antique gold carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_18.jpg",
    "primary_image": "assets/images/image_18.jpg",
    "views": [
      "assets/images/image_18.jpg"
    ],
    "notes": "",
    "slug": "mountain-pass-at-dawn"
  },
  {
    "id": 19,
    "canonical_id": 19,
    "primary_card_id": 19,
    "card_ids": [
      19
    ],
    "title": "Tidal Moon",
    "canonical_title": "Tidal Moon",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Circular",
    "medium": "Acrylic and resin on circular wood panel",
    "support": "circular wood panel",
    "dimensions": "100 × 100 cm (39 × 39 in)",
    "height_cm": 100,
    "width_cm": 100,
    "height_in": 39,
    "width_in": 39,
    "panel_count": 1,
    "frame_type": "Unframed circular panel",
    "frame_material": "Wood panel",
    "frame_colour": "No decorative frame",
    "frame_finish": "Painted edge",
    "mount_liner": "None",
    "framed_description": "No decorative frame Wood panel Unframed circular panel",
    "framed_dimensions": "100 × 100 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Tidal Moon is an original abstract work executed in acrylic and resin on circular wood panel. Presented in a no decorative frame wood panel unframed circular panel.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_19.jpg",
    "primary_image": "assets/images/image_19.jpg",
    "views": [
      "assets/images/image_19.jpg"
    ],
    "notes": "",
    "slug": "tidal-moon"
  },
  {
    "id": 20,
    "canonical_id": 20,
    "primary_card_id": 20,
    "card_ids": [
      20
    ],
    "title": "Coastal Studies Triptych",
    "canonical_title": "Coastal Studies Triptych",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Works on Paper",
    "orientation": "3-piece vertical set",
    "medium": "Watercolour on paper",
    "support": "paper",
    "dimensions": "25 × 50 cm (10 × 20 in)",
    "height_cm": 25,
    "width_cm": 50,
    "height_in": 10,
    "width_in": 20,
    "panel_count": 3,
    "frame_type": "Slim gallery frames",
    "frame_material": "Walnut wood",
    "frame_colour": "Dark brown",
    "frame_finish": "Walnut",
    "mount_liner": "Wide off-white mounts",
    "framed_description": "Dark brown Walnut wood Slim gallery frames",
    "framed_dimensions": "110 × 66 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Coastal Studies Triptych is an original works on paper work executed in watercolour on paper. Presented in a dark brown walnut wood slim gallery frames. Artwork dimensions are per sheet; framed size is the stacked three-work arrangement.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_20.jpg",
    "primary_image": "assets/images/image_20.jpg",
    "views": [
      "assets/images/image_20.jpg"
    ],
    "notes": "Artwork dimensions are per sheet; framed size is the stacked three-work arrangement.",
    "slug": "coastal-studies-triptych"
  },
  {
    "id": 21,
    "canonical_id": 21,
    "primary_card_id": 21,
    "card_ids": [
      21
    ],
    "title": "Botanical Rhythms Quartet",
    "canonical_title": "Botanical Rhythms Quartet",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Works on Paper",
    "orientation": "4-piece set",
    "medium": "Watercolour and gouache on paper",
    "support": "paper",
    "dimensions": "45 × 20 cm (18 × 8 in)",
    "height_cm": 45,
    "width_cm": 20,
    "height_in": 18,
    "width_in": 8,
    "panel_count": 4,
    "frame_type": "Slim gallery frames",
    "frame_material": "Light wood",
    "frame_colour": "Light wood / champagne",
    "frame_finish": "Pale oak / satin",
    "mount_liner": "Ivory mounts",
    "framed_description": "Light wood / champagne Light wood Slim gallery frames",
    "framed_dimensions": "64 × 108 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Botanical Rhythms Quartet is an original works on paper work executed in watercolour and gouache on paper. Presented in a light wood / champagne light wood slim gallery frames. Artwork dimensions are per sheet; framed size is the four-work horizontal arrangement.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_21.jpg",
    "primary_image": "assets/images/image_21.jpg",
    "views": [
      "assets/images/image_21.jpg"
    ],
    "notes": "Artwork dimensions are per sheet; framed size is the four-work horizontal arrangement.",
    "slug": "botanical-rhythms-quartet"
  },
  {
    "id": 24,
    "canonical_id": 22,
    "primary_card_id": 24,
    "card_ids": [
      24
    ],
    "title": "Festival Procession",
    "canonical_title": "Festival Procession",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative / Modern Indian",
    "orientation": "Portrait",
    "medium": "Oil and acrylic on canvas",
    "support": "canvas",
    "dimensions": "140 × 105 cm (55 × 41 in)",
    "height_cm": 140,
    "width_cm": 105,
    "height_in": 55,
    "width_in": 41,
    "panel_count": 1,
    "frame_type": "Slim gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Espresso / black",
    "frame_finish": "Satin",
    "mount_liner": "None",
    "framed_description": "Espresso / black Wood Slim gallery frame",
    "framed_dimensions": "150 × 115 cm",
    "price": "₹1,50,000",
    "price_inr": 150000,
    "description": "Festival Procession is an original figurative / modern indian work executed in oil and acrylic on canvas. Presented in a espresso / black wood slim gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_24.jpg",
    "primary_image": "assets/images/image_24.jpg",
    "views": [
      "assets/images/image_24.jpg"
    ],
    "notes": "",
    "slug": "festival-procession"
  },
  {
    "id": 25,
    "canonical_id": 23,
    "primary_card_id": 25,
    "card_ids": [
      25
    ],
    "title": "Harbour in Winter Light",
    "canonical_title": "Harbour in Winter Light",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Seascape",
    "orientation": "Landscape",
    "medium": "Watercolor on archival paper",
    "support": "archival paper",
    "dimensions": "85 × 115 cm (33 × 45 in)",
    "height_cm": 85,
    "width_cm": 115,
    "height_in": 33,
    "width_in": 45,
    "panel_count": 1,
    "frame_type": "Layered classic frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown + gold",
    "frame_finish": "Walnut outer / gilt inner slip",
    "mount_liner": "Cream liner",
    "framed_description": "Dark brown + gold Wood Layered classic frame",
    "framed_dimensions": "105 × 135 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Harbour in Winter Light is an original seascape work executed in watercolor on archival paper. Presented in a dark brown + gold wood layered classic frame. Repeated artwork; normalized to identical catalogue data across Cards 25, 31.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_25.jpg",
    "primary_image": "assets/images/image_25.jpg",
    "views": [
      "assets/images/image_25.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 25, 31.",
    "slug": "harbour-in-winter-light"
  },
  {
    "id": 26,
    "canonical_id": 24,
    "primary_card_id": 26,
    "card_ids": [
      26
    ],
    "title": "Interlocking Terracotta & Indigo",
    "canonical_title": "Interlocking Terracotta & Indigo",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Acrylic and texture on canvas",
    "support": "canvas",
    "dimensions": "140 × 110 cm (55 × 43 in)",
    "height_cm": 140,
    "width_cm": 110,
    "height_in": 55,
    "width_in": 43,
    "panel_count": 1,
    "frame_type": "Slim shadow-gap frame",
    "frame_material": "Wood",
    "frame_colour": "Charcoal black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Charcoal black Wood Slim shadow-gap frame",
    "framed_dimensions": "148 × 118 cm",
    "price": "₹1,50,000",
    "price_inr": 150000,
    "description": "Interlocking Terracotta & Indigo is an original abstract work executed in acrylic and texture on canvas. Presented in a charcoal black wood slim shadow-gap frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_26.jpg",
    "primary_image": "assets/images/image_26.jpg",
    "views": [
      "assets/images/image_26.jpg"
    ],
    "notes": "",
    "slug": "interlocking-terracotta-indigo"
  },
  {
    "id": 27,
    "canonical_id": 25,
    "primary_card_id": 27,
    "card_ids": [
      27
    ],
    "title": "Indigo Window with Rust",
    "canonical_title": "Indigo Window with Rust",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Mixed media on paper",
    "support": "paper",
    "dimensions": "120 × 85 cm (47 × 33 in)",
    "height_cm": 120,
    "width_cm": 85,
    "height_in": 47,
    "width_in": 33,
    "panel_count": 1,
    "frame_type": "Matted gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "Wide warm-ivory mount",
    "framed_description": "Black Wood Matted gallery frame",
    "framed_dimensions": "142 × 107 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Indigo Window with Rust is an original abstract work executed in mixed media on paper. Presented in a black wood matted gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_27.jpg",
    "primary_image": "assets/images/image_27.jpg",
    "views": [
      "assets/images/image_27.jpg"
    ],
    "notes": "",
    "slug": "indigo-window-with-rust"
  },
  {
    "id": 28,
    "canonical_id": 26,
    "primary_card_id": 28,
    "card_ids": [
      28
    ],
    "title": "Women at the Verandah",
    "canonical_title": "Women at the Verandah",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Portrait",
    "medium": "Mixed media and tempera on canvas",
    "support": "canvas",
    "dimensions": "135 × 95 cm (53 × 37 in)",
    "height_cm": 135,
    "width_cm": 95,
    "height_in": 53,
    "width_in": 37,
    "panel_count": 1,
    "frame_type": "Classic gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Bronze / dark brown",
    "frame_finish": "Antiqued",
    "mount_liner": "None",
    "framed_description": "Bronze / dark brown Wood Classic gallery frame",
    "framed_dimensions": "151 × 111 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Women at the Verandah is an original figurative work executed in mixed media and tempera on canvas. Presented in a bronze / dark brown wood classic gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_28.jpg",
    "primary_image": "assets/images/image_28.jpg",
    "views": [
      "assets/images/image_28.jpg"
    ],
    "notes": "",
    "slug": "women-at-the-verandah"
  },
  {
    "id": 29,
    "canonical_id": 27,
    "primary_card_id": 29,
    "card_ids": [
      29
    ],
    "title": "Palace Courtyard",
    "canonical_title": "Palace Courtyard",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Traditional / Figurative",
    "orientation": "Portrait",
    "medium": "Gouache and tempera on canvas",
    "support": "canvas",
    "dimensions": "130 × 95 cm (51 × 37 in)",
    "height_cm": 130,
    "width_cm": 95,
    "height_in": 51,
    "width_in": 37,
    "panel_count": 1,
    "frame_type": "Carved classic frame",
    "frame_material": "Teak / hardwood",
    "frame_colour": "Dark brown",
    "frame_finish": "Carved walnut / teak",
    "mount_liner": "None",
    "framed_description": "Dark brown Teak / hardwood Carved classic frame",
    "framed_dimensions": "152 × 117 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Palace Courtyard is an original traditional / figurative work executed in gouache and tempera on canvas. Presented in a dark brown teak / hardwood carved classic frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_29.jpg",
    "primary_image": "assets/images/image_29.jpg",
    "views": [
      "assets/images/image_29.jpg"
    ],
    "notes": "",
    "slug": "palace-courtyard"
  },
  {
    "id": 30,
    "canonical_id": 28,
    "primary_card_id": 30,
    "card_ids": [
      30
    ],
    "title": "Chromatic Gesture",
    "canonical_title": "Chromatic Gesture",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Acrylic on canvas",
    "support": "canvas",
    "dimensions": "130 × 90 cm (51 × 35 in)",
    "height_cm": 130,
    "width_cm": 90,
    "height_in": 51,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Slim float frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Slim float frame",
    "framed_dimensions": "138 × 98 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Chromatic Gesture is an original abstract work executed in acrylic on canvas. Presented in a black wood slim float frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_30.jpg",
    "primary_image": "assets/images/image_30.jpg",
    "views": [
      "assets/images/image_30.jpg"
    ],
    "notes": "",
    "slug": "chromatic-gesture"
  },
  {
    "id": 31,
    "canonical_id": 29,
    "primary_card_id": 31,
    "card_ids": [
      31
    ],
    "title": "Harbour in Winter Light II",
    "canonical_title": "Harbour in Winter Light II",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Seascape",
    "orientation": "Landscape",
    "medium": "Watercolor on archival paper",
    "support": "archival paper",
    "dimensions": "85 × 115 cm (33 × 45 in)",
    "height_cm": 85,
    "width_cm": 115,
    "height_in": 33,
    "width_in": 45,
    "panel_count": 1,
    "frame_type": "Layered classic frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown + gold",
    "frame_finish": "Walnut outer / gilt inner slip",
    "mount_liner": "Cream liner",
    "framed_description": "Dark brown + gold Wood Layered classic frame",
    "framed_dimensions": "105 × 135 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Harbour in Winter Light II is an original seascape work executed in watercolor on archival paper. Presented in a dark brown + gold wood layered classic frame. Repeated artwork; normalized to identical catalogue data across Cards 25, 31.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_31.jpg",
    "primary_image": "assets/images/image_31.jpg",
    "views": [
      "assets/images/image_31.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 25, 31.",
    "slug": "harbour-in-winter-light-ii"
  },
  {
    "id": 32,
    "canonical_id": 30,
    "primary_card_id": 32,
    "card_ids": [
      32
    ],
    "title": "Black Sun, Red Earth",
    "canonical_title": "Black Sun, Red Earth",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Mixed media and texture on canvas",
    "support": "canvas",
    "dimensions": "140 × 100 cm (55 × 39 in)",
    "height_cm": 140,
    "width_cm": 100,
    "height_in": 55,
    "width_in": 39,
    "panel_count": 1,
    "frame_type": "Shadow-gap frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Shadow-gap frame",
    "framed_dimensions": "148 × 108 cm",
    "price": "₹1,50,000",
    "price_inr": 150000,
    "description": "Black Sun, Red Earth is an original abstract work executed in mixed media and texture on canvas. Presented in a black wood shadow-gap frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_32.jpg",
    "primary_image": "assets/images/image_32.jpg",
    "views": [
      "assets/images/image_32.jpg"
    ],
    "notes": "",
    "slug": "black-sun-red-earth"
  },
  {
    "id": 33,
    "canonical_id": 31,
    "primary_card_id": 33,
    "card_ids": [
      33
    ],
    "title": "Clifftop by the Sea",
    "canonical_title": "Clifftop by the Sea",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "110 × 80 cm (43 × 31 in)",
    "height_cm": 110,
    "width_cm": 80,
    "height_in": 43,
    "width_in": 31,
    "panel_count": 1,
    "frame_type": "Classic frame",
    "frame_material": "Wood",
    "frame_colour": "Champagne gold",
    "frame_finish": "Satin",
    "mount_liner": "Warm ivory liner",
    "framed_description": "Champagne gold Wood Classic frame",
    "framed_dimensions": "130 × 100 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Clifftop by the Sea is an original landscape work executed in oil on canvas. Presented in a champagne gold wood classic frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_33.jpg",
    "primary_image": "assets/images/image_33.jpg",
    "views": [
      "assets/images/image_33.jpg"
    ],
    "notes": "",
    "slug": "clifftop-by-the-sea"
  },
  {
    "id": 34,
    "canonical_id": 32,
    "primary_card_id": 34,
    "card_ids": [
      34,
      38
    ],
    "title": "Ganesha in Ivory & Ink",
    "canonical_title": "Ganesha in Ivory & Ink",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Devotional / Traditional",
    "orientation": "Near-square",
    "medium": "Pigment, ink and metallic detailing on cloth",
    "support": "cloth",
    "dimensions": "95 × 85 cm (37 × 33 in)",
    "height_cm": 95,
    "width_cm": 85,
    "height_in": 37,
    "width_in": 33,
    "panel_count": 1,
    "frame_type": "Ornate carved frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown + antiqued metal",
    "frame_finish": "Carved / antiqued",
    "mount_liner": "None",
    "framed_description": "Dark brown + antiqued metal Wood Ornate carved frame",
    "framed_dimensions": "117 × 107 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Ganesha in Ivory & Ink is an original devotional / traditional work executed in pigment, ink and metallic detailing on cloth. Presented in a dark brown + antiqued metal wood ornate carved frame. Repeated artwork; normalized to identical catalogue data across Cards 34, 38.",
    "verification_status": "verified_tier",
    "duplicate_group": "D04",
    "image": "assets/images/image_34.jpg",
    "primary_image": "assets/images/image_34.jpg",
    "views": [
      "assets/images/image_34.jpg",
      "assets/images/image_38.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 34, 38.",
    "slug": "ganesha-in-ivory-ink"
  },
  {
    "id": 35,
    "canonical_id": 33,
    "primary_card_id": 35,
    "card_ids": [
      35
    ],
    "title": "Woman in a Dark Salon",
    "canonical_title": "Woman in a Dark Salon",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "95 × 65 cm (37 × 26 in)",
    "height_cm": 95,
    "width_cm": 65,
    "height_in": 37,
    "width_in": 26,
    "panel_count": 1,
    "frame_type": "Ornate portrait frame",
    "frame_material": "Carved wood",
    "frame_colour": "Gold",
    "frame_finish": "Antiqued gilt",
    "mount_liner": "None",
    "framed_description": "Gold Carved wood Ornate portrait frame",
    "framed_dimensions": "115 × 85 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Woman in a Dark Salon is an original figurative work executed in oil on canvas. Presented in a gold carved wood ornate portrait frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_35.jpg",
    "primary_image": "assets/images/image_35.jpg",
    "views": [
      "assets/images/image_35.jpg"
    ],
    "notes": "",
    "slug": "woman-in-a-dark-salon"
  },
  {
    "id": 36,
    "canonical_id": 34,
    "primary_card_id": 36,
    "card_ids": [
      36
    ],
    "title": "Sunset on the River",
    "canonical_title": "Sunset on the River",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Landscape",
    "medium": "Oil and acrylic on canvas",
    "support": "canvas",
    "dimensions": "75 × 105 cm (30 × 41 in)",
    "height_cm": 75,
    "width_cm": 105,
    "height_in": 30,
    "width_in": 41,
    "panel_count": 1,
    "frame_type": "Layered classic frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown + warm gold",
    "frame_finish": "Walnut / gilt inner slip",
    "mount_liner": "None",
    "framed_description": "Dark brown + warm gold Wood Layered classic frame",
    "framed_dimensions": "91 × 121 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Sunset on the River is an original landscape work executed in oil and acrylic on canvas. Presented in a dark brown + warm gold wood layered classic frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_36.jpg",
    "primary_image": "assets/images/image_36.jpg",
    "views": [
      "assets/images/image_36.jpg"
    ],
    "notes": "",
    "slug": "sunset-on-the-river"
  },
  {
    "id": 37,
    "canonical_id": 35,
    "primary_card_id": 37,
    "card_ids": [
      37,
      40,
      43
    ],
    "title": "Crimson Field I",
    "canonical_title": "Crimson Field I",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Acrylic and mixed media on canvas",
    "support": "canvas",
    "dimensions": "140 × 90 cm (55 × 35 in)",
    "height_cm": 140,
    "width_cm": 90,
    "height_in": 55,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Slim gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Slim gallery frame",
    "framed_dimensions": "148 × 98 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Crimson Field I is an original abstract work executed in acrylic and mixed media on canvas. Presented in a black wood slim gallery frame. Repeated artwork; normalized to identical catalogue data across Cards 37, 40, 43.",
    "verification_status": "verified_tier",
    "duplicate_group": "D05",
    "image": "assets/images/image_37.jpg",
    "primary_image": "assets/images/image_37.jpg",
    "views": [
      "assets/images/image_37.jpg",
      "assets/images/image_40.jpg",
      "assets/images/image_43.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 37, 40, 43.",
    "slug": "crimson-field-i"
  },
  {
    "id": 39,
    "canonical_id": 36,
    "primary_card_id": 39,
    "card_ids": [
      39
    ],
    "title": "Nocturne in Gold & Black",
    "canonical_title": "Nocturne in Gold & Black",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract / Landscape",
    "orientation": "Landscape",
    "medium": "Oil and acrylic on canvas",
    "support": "canvas",
    "dimensions": "75 × 95 cm (30 × 37 in)",
    "height_cm": 75,
    "width_cm": 95,
    "height_in": 30,
    "width_in": 37,
    "panel_count": 1,
    "frame_type": "Deep box frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Deep box frame",
    "framed_dimensions": "87 × 107 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Nocturne in Gold & Black is an original abstract / landscape work executed in oil and acrylic on canvas. Presented in a black wood deep box frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_39.jpg",
    "primary_image": "assets/images/image_39.jpg",
    "views": [
      "assets/images/image_39.jpg"
    ],
    "notes": "",
    "slug": "nocturne-in-gold-black"
  },
  {
    "id": 41,
    "canonical_id": 37,
    "primary_card_id": 41,
    "card_ids": [
      41,
      44,
      52
    ],
    "title": "Blessings III",
    "canonical_title": "Blessings III",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "135 × 90 cm (53 × 35 in)",
    "height_cm": 135,
    "width_cm": 90,
    "height_in": 53,
    "width_in": 35,
    "panel_count": 1,
    "frame_type": "Layered portrait frame",
    "frame_material": "Wood",
    "frame_colour": "Warm walnut outer with antique-gold inner slip",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Warm walnut outer with antique-gold inner slip Wood Layered portrait frame",
    "framed_dimensions": "157 × 112 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Blessings III is an original figurative work executed in oil on canvas. Presented in a warm walnut outer with antique-gold inner slip wood layered portrait frame. Repeated artwork; normalized to identical catalogue data across Cards 41, 44, 52.",
    "verification_status": "verified_tier",
    "duplicate_group": "D06",
    "image": "assets/images/image_41.jpg",
    "primary_image": "assets/images/image_41.jpg",
    "views": [
      "assets/images/image_41.jpg",
      "assets/images/image_44.jpg",
      "assets/images/image_52.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 41, 44, 52.",
    "slug": "blessings-iii"
  },
  {
    "id": 42,
    "canonical_id": 38,
    "primary_card_id": 42,
    "card_ids": [
      42,
      46
    ],
    "title": "American Diner Experience",
    "canonical_title": "American Diner Experience",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Still Life",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "105 × 75 cm (41 × 30 in)",
    "height_cm": 105,
    "width_cm": 75,
    "height_in": 41,
    "width_in": 30,
    "panel_count": 1,
    "frame_type": "Slim gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Black",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Black Wood Slim gallery frame",
    "framed_dimensions": "113 × 83 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "American Diner Experience is an original still life work executed in oil on canvas. Presented in a black wood slim gallery frame. Repeated artwork; normalized to identical catalogue data across Cards 42, 46.",
    "verification_status": "verified_tier",
    "duplicate_group": "D07",
    "image": "assets/images/image_42.jpg",
    "primary_image": "assets/images/image_42.jpg",
    "views": [
      "assets/images/image_42.jpg",
      "assets/images/image_46.jpg"
    ],
    "notes": "Repeated artwork; normalized to identical catalogue data across Cards 42, 46.",
    "slug": "american-diner-experience"
  },
  {
    "id": 45,
    "canonical_id": 39,
    "primary_card_id": 45,
    "card_ids": [
      45
    ],
    "title": "Seated Woman in Burgundy",
    "canonical_title": "Seated Woman in Burgundy",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "105 × 75 cm (41 × 30 in)",
    "height_cm": 105,
    "width_cm": 75,
    "height_in": 41,
    "width_in": 30,
    "panel_count": 1,
    "frame_type": "Ornate portrait frame",
    "frame_material": "Carved wood",
    "frame_colour": "Gold",
    "frame_finish": "Antiqued gilt",
    "mount_liner": "None",
    "framed_description": "Gold Carved wood Ornate portrait frame",
    "framed_dimensions": "125 × 95 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Seated Woman in Burgundy is an original figurative work executed in oil on canvas. Presented in a gold carved wood ornate portrait frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_45.jpg",
    "primary_image": "assets/images/image_45.jpg",
    "views": [
      "assets/images/image_45.jpg"
    ],
    "notes": "",
    "slug": "seated-woman-in-burgundy"
  },
  {
    "id": 47,
    "canonical_id": 40,
    "primary_card_id": 47,
    "card_ids": [
      47
    ],
    "title": "Goddess Fury",
    "canonical_title": "Goddess Fury",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative / Folk",
    "orientation": "Portrait",
    "medium": "Acrylic and gouache on canvas",
    "support": "canvas",
    "dimensions": "120 × 95 cm (47 × 37 in)",
    "height_cm": 120,
    "width_cm": 95,
    "height_in": 47,
    "width_in": 37,
    "panel_count": 1,
    "frame_type": "Classic gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Dark brown",
    "frame_finish": "Walnut",
    "mount_liner": "None",
    "framed_description": "Dark brown Wood Classic gallery frame",
    "framed_dimensions": "132 × 107 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Goddess Fury is an original figurative / folk work executed in acrylic and gouache on canvas. Presented in a dark brown wood classic gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_47.jpg",
    "primary_image": "assets/images/image_47.jpg",
    "views": [
      "assets/images/image_47.jpg"
    ],
    "notes": "",
    "slug": "goddess-fury"
  },
  {
    "id": 48,
    "canonical_id": 41,
    "primary_card_id": 48,
    "card_ids": [
      48
    ],
    "title": "Yashoda Krishna",
    "canonical_title": "Yashoda Krishna",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Folk / Figurative",
    "orientation": "Landscape",
    "medium": "Gouache and acrylic on board",
    "support": "board",
    "dimensions": "90 × 100 cm (35 × 39 in)",
    "height_cm": 90,
    "width_cm": 100,
    "height_in": 35,
    "width_in": 39,
    "panel_count": 1,
    "frame_type": "Carved classic frame",
    "frame_material": "Wood",
    "frame_colour": "Dark carved walnut",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Dark carved walnut Wood Carved classic frame",
    "framed_dimensions": "108 × 118 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Yashoda Krishna is an original folk / figurative work executed in gouache and acrylic on board. Presented in a dark carved walnut wood carved classic frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_48.jpg",
    "primary_image": "assets/images/image_48.jpg",
    "views": [
      "assets/images/image_48.jpg"
    ],
    "notes": "",
    "slug": "yashoda-krishna"
  },
  {
    "id": 49,
    "canonical_id": 42,
    "primary_card_id": 49,
    "card_ids": [
      49
    ],
    "title": "Meadow Under Blue Sky",
    "canonical_title": "Meadow Under Blue Sky",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Landscape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "90 × 120 cm (35 × 47 in)",
    "height_cm": 90,
    "width_cm": 120,
    "height_in": 35,
    "width_in": 47,
    "panel_count": 1,
    "frame_type": "Classic gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Pale gold / warm wood",
    "frame_finish": "Soft satin",
    "mount_liner": "None",
    "framed_description": "Pale gold / warm wood Wood Classic gallery frame",
    "framed_dimensions": "106 × 136 cm",
    "price": "₹1,20,000",
    "price_inr": 120000,
    "description": "Meadow Under Blue Sky is an original landscape work executed in oil on canvas. Presented in a pale gold / warm wood wood classic gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_49.jpg",
    "primary_image": "assets/images/image_49.jpg",
    "views": [
      "assets/images/image_49.jpg"
    ],
    "notes": "",
    "slug": "meadow-under-blue-sky"
  },
  {
    "id": 50,
    "canonical_id": 43,
    "primary_card_id": 50,
    "card_ids": [
      50
    ],
    "title": "Crimson Passage",
    "canonical_title": "Crimson Passage",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Panoramic",
    "medium": "Acrylic and mixed media on canvas",
    "support": "canvas",
    "dimensions": "100 × 180 cm (39 × 71 in)",
    "height_cm": 100,
    "width_cm": 180,
    "height_in": 39,
    "width_in": 71,
    "panel_count": 1,
    "frame_type": "Minimal float frame",
    "frame_material": "Wood",
    "frame_colour": "Blackened bronze / charcoal",
    "frame_finish": "Matte / satin",
    "mount_liner": "None",
    "framed_description": "Blackened bronze / charcoal Wood Minimal float frame",
    "framed_dimensions": "108 × 188 cm",
    "price": "₹1,80,000",
    "price_inr": 180000,
    "description": "Crimson Passage is an original abstract work executed in acrylic and mixed media on canvas. Presented in a blackened bronze / charcoal wood minimal float frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_50.jpg",
    "primary_image": "assets/images/image_50.jpg",
    "views": [
      "assets/images/image_50.jpg"
    ],
    "notes": "",
    "slug": "crimson-passage"
  },
  {
    "id": 51,
    "canonical_id": 44,
    "primary_card_id": 51,
    "card_ids": [
      51
    ],
    "title": "Smoke, Moss & Ash Abstract",
    "canonical_title": "Smoke, Moss & Ash Abstract",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Near-square",
    "medium": "Mixed media on canvas",
    "support": "canvas",
    "dimensions": "140 × 130 cm (55 × 51 in)",
    "height_cm": 140,
    "width_cm": 130,
    "height_in": 55,
    "width_in": 51,
    "panel_count": 1,
    "frame_type": "Frameless / concealed shadow gap",
    "frame_material": "—",
    "frame_colour": "None",
    "frame_finish": "Unframed / concealed shadow gap",
    "mount_liner": "None",
    "framed_description": "— Frameless / concealed shadow gap",
    "framed_dimensions": "144 × 134 cm",
    "price": "₹1,80,000",
    "price_inr": 180000,
    "description": "Smoke, Moss & Ash Abstract is an original abstract work executed in mixed media on canvas. Presented in a — frameless / concealed shadow gap.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_51.jpg",
    "primary_image": "assets/images/image_51.jpg",
    "views": [
      "assets/images/image_51.jpg"
    ],
    "notes": "",
    "slug": "smoke-moss-ash-abstract"
  },
  {
    "id": 53,
    "canonical_id": 45,
    "primary_card_id": 53,
    "card_ids": [
      53
    ],
    "title": "Coastal Village in Pale Blue",
    "canonical_title": "Coastal Village in Pale Blue",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Seascape",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "80 × 110 cm (31 × 43 in)",
    "height_cm": 80,
    "width_cm": 110,
    "height_in": 31,
    "width_in": 43,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Gold",
    "frame_finish": "Antiqued gilt",
    "mount_liner": "None",
    "framed_description": "Gold Carved wood Ornate moulded frame",
    "framed_dimensions": "100 × 130 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Coastal Village in Pale Blue is an original seascape work executed in oil on canvas. Presented in a gold carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_53.jpg",
    "primary_image": "assets/images/image_53.jpg",
    "views": [
      "assets/images/image_53.jpg"
    ],
    "notes": "",
    "slug": "coastal-village-in-pale-blue"
  },
  {
    "id": 54,
    "canonical_id": 46,
    "primary_card_id": 54,
    "card_ids": [
      54
    ],
    "title": "Vermeer Inspired Girl",
    "canonical_title": "Vermeer Inspired Girl",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Figurative / Old Master",
    "orientation": "Portrait",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "45 × 39 cm (18 × 15 in)",
    "height_cm": 45,
    "width_cm": 39,
    "height_in": 18,
    "width_in": 15,
    "panel_count": 1,
    "frame_type": "Layered portrait frame",
    "frame_material": "Wood",
    "frame_colour": "Black + gold",
    "frame_finish": "Ebonized / gilt inner slip",
    "mount_liner": "None",
    "framed_description": "Black + gold Wood Layered portrait frame",
    "framed_dimensions": "61 × 55 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Vermeer Inspired Girl is an original figurative / old master work executed in oil on canvas. Presented in a black + gold wood layered portrait frame. Recognizable as the Vermeer composition; dimensions use the original painting's scale rather than the oversized room mock-up.",
    "verification_status": "verified",
    "duplicate_group": null,
    "image": "assets/images/image_54.jpg",
    "primary_image": "assets/images/image_54.jpg",
    "views": [
      "assets/images/image_54.jpg"
    ],
    "notes": "Recognizable as the Vermeer composition; dimensions use the original painting's scale rather than the oversized room mock-up.",
    "slug": "vermeer-inspired-girl"
  },
  {
    "id": 55,
    "canonical_id": 47,
    "primary_card_id": 55,
    "card_ids": [
      55
    ],
    "title": "Abstract Cityscape",
    "canonical_title": "Abstract Cityscape",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract",
    "orientation": "Portrait",
    "medium": "Mixed media and metallic pigment on canvas",
    "support": "canvas",
    "dimensions": "120 × 85 cm (47 × 33 in)",
    "height_cm": 120,
    "width_cm": 85,
    "height_in": 47,
    "width_in": 33,
    "panel_count": 1,
    "frame_type": "Slim metal / gallery frame",
    "frame_material": "Metal",
    "frame_colour": "Champagne gold",
    "frame_finish": "Satin",
    "mount_liner": "None",
    "framed_description": "Champagne gold Metal Slim metal / gallery frame",
    "framed_dimensions": "128 × 93 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Abstract Cityscape is an original abstract work executed in mixed media and metallic pigment on canvas. Presented in a champagne gold metal slim metal / gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_55.jpg",
    "primary_image": "assets/images/image_55.jpg",
    "views": [
      "assets/images/image_55.jpg"
    ],
    "notes": "",
    "slug": "abstract-cityscape"
  },
  {
    "id": 56,
    "canonical_id": 48,
    "primary_card_id": 56,
    "card_ids": [
      56
    ],
    "title": "Lilac Garden",
    "canonical_title": "Lilac Garden",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract / Pattern",
    "orientation": "Landscape",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "90 × 105 cm (35 × 41 in)",
    "height_cm": 90,
    "width_cm": 105,
    "height_in": 35,
    "width_in": 41,
    "panel_count": 1,
    "frame_type": "Ornate moulded frame",
    "frame_material": "Carved wood",
    "frame_colour": "Antique gold",
    "frame_finish": "Matte",
    "mount_liner": "None",
    "framed_description": "Antique gold Carved wood Ornate moulded frame",
    "framed_dimensions": "112 × 127 cm",
    "price": "₹1,00,000",
    "price_inr": 100000,
    "description": "Lilac Garden is an original abstract / pattern work executed in oil on canvas. Presented in a antique gold carved wood ornate moulded frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_56.jpg",
    "primary_image": "assets/images/image_56.jpg",
    "views": [
      "assets/images/image_56.jpg"
    ],
    "notes": "",
    "slug": "lilac-garden"
  },
  {
    "id": 57,
    "canonical_id": 49,
    "primary_card_id": 57,
    "card_ids": [
      57
    ],
    "title": "Blue-Green Garden Study",
    "canonical_title": "Blue-Green Garden Study",
    "source_title": null,
    "artist": "Rivani Atelier",
    "category": "Abstract / Pattern",
    "orientation": "Square",
    "medium": "Oil on canvas",
    "support": "canvas",
    "dimensions": "65 × 65 cm (26 × 26 in)",
    "height_cm": 65,
    "width_cm": 65,
    "height_in": 26,
    "width_in": 26,
    "panel_count": 1,
    "frame_type": "Slim gallery frame",
    "frame_material": "Wood",
    "frame_colour": "Champagne gold",
    "frame_finish": "Satin",
    "mount_liner": "None",
    "framed_description": "Champagne gold Wood Slim gallery frame",
    "framed_dimensions": "75 × 75 cm",
    "price": "₹80,000",
    "price_inr": 80000,
    "description": "Blue-Green Garden Study is an original abstract / pattern work executed in oil on canvas. Presented in a champagne gold wood slim gallery frame.",
    "verification_status": "verified_tier",
    "duplicate_group": null,
    "image": "assets/images/image_57.jpg",
    "primary_image": "assets/images/image_57.jpg",
    "views": [
      "assets/images/image_57.jpg"
    ],
    "notes": "",
    "slug": "blue-green-garden-study"
  }
];

  var fallbackMuse = [
    { artworkId: 24, image: "assets/images/image_24.jpg", title: "Festival Procession" },
    { artworkId: 25, image: "assets/images/image_25.jpg", title: "Harbour in Winter Light" },
    { artworkId: 26, image: "assets/images/image_26.jpg", title: "Interlocking Terracotta & Indigo" },
    { artworkId: 27, image: "assets/images/image_27.jpg", title: "Indigo Window with Rust" },
    { artworkId: 28, image: "assets/images/image_28.jpg", title: "Women at the Verandah" },
    { artworkId: 29, image: "assets/images/image_29.jpg", title: "Palace Courtyard" },
    { artworkId: 30, image: "assets/images/image_30.jpg", title: "Chromatic Gesture" },
    { artworkId: 25, image: "assets/images/image_31.jpg", title: "Harbour in Winter Light" },
    { artworkId: 32, image: "assets/images/image_32.jpg", title: "Black Sun, Red Earth" },
    { artworkId: 33, image: "assets/images/image_33.jpg", title: "Clifftop by the Sea" },
    { artworkId: 34, image: "assets/images/image_34.jpg", title: "Ganesha in Ivory & Ink" },
    { artworkId: 35, image: "assets/images/image_35.jpg", title: "Woman in a Dark Salon" },
    { artworkId: 36, image: "assets/images/image_36.jpg", title: "Sunset on the River" },
    { artworkId: 37, image: "assets/images/image_37.jpg", title: "Crimson Field I" },
    { artworkId: 34, image: "assets/images/image_38.jpg", title: "Ganesha in Ivory & Ink" },
    { artworkId: 39, image: "assets/images/image_39.jpg", title: "Nocturne in Gold & Black" },
    { artworkId: 37, image: "assets/images/image_40.jpg", title: "Crimson Field I" },
    { artworkId: 41, image: "assets/images/image_41.jpg", title: "Woman in White at Dusk" },
    { artworkId: 42, image: "assets/images/image_42.jpg", title: "Still Life with Celebration Cake" },
    { artworkId: 37, image: "assets/images/image_43.jpg", title: "Crimson Field I" },
    { artworkId: 41, image: "assets/images/image_44.jpg", title: "Woman in White at Dusk" },
    { artworkId: 45, image: "assets/images/image_45.jpg", title: "Seated Woman in Burgundy" },
    { artworkId: 42, image: "assets/images/image_46.jpg", title: "Still Life with Celebration Cake" },
    { artworkId: 47, image: "assets/images/image_47.jpg", title: "Procession with Riders" },
    { artworkId: 48, image: "assets/images/image_48.jpg", title: "Cow and Caretaker" },
    { artworkId: 49, image: "assets/images/image_49.jpg", title: "Meadow Under Blue Sky" },
    { artworkId: 50, image: "assets/images/image_50.jpg", title: "Crimson Passage" },
    { artworkId: 51, image: "assets/images/image_51.jpg", title: "Smoke, Moss & Ash" },
    { artworkId: 41, image: "assets/images/image_52.jpg", title: "Woman in White at Dusk" },
    { artworkId: 53, image: "assets/images/image_53.jpg", title: "Coastal Village in Pale Blue" },
    { artworkId: 54, image: "assets/images/image_54.jpg", title: "Girl with a Pearl Earring" },
    { artworkId: 55, image: "assets/images/image_55.jpg", title: "Golden Geometry with Black Rectangle" },
    { artworkId: 56, image: "assets/images/image_56.jpg", title: "Lilac Garden" },
    { artworkId: 57, image: "assets/images/image_57.jpg", title: "Blue-Green Garden Study" }
  ];

  var artworks = (window.RIVANI_ARTWORKS && window.RIVANI_ARTWORKS.length) 
    ? window.RIVANI_ARTWORKS 
    : fallbackArtworks;

  var muse = (window.RIVANI_MUSE && window.RIVANI_MUSE.length) 
    ? window.RIVANI_MUSE 
    : fallbackMuse;

  window.RIVANI_ARTWORKS = artworks;
  window.RIVANI_MUSE = muse;

  var filter = 'All';
  var query = '';
  var shortlist = storage.get('rivaniShortlist', []);

  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }

  var categories = ['All', 'Abstract', 'Figurative', 'Landscape', 'Sacred & Traditional', 'Still Life', 'Works on Paper'];

  function matchCategoryFilter(cat, selectedFilter) {
    if (!cat) return false;
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Abstract') return cat.indexOf('Abstract') !== -1;
    if (selectedFilter === 'Figurative') return cat.indexOf('Figurative') !== -1 || cat.indexOf('Figure') !== -1;
    if (selectedFilter === 'Landscape') return cat.indexOf('Landscape') !== -1 || cat.indexOf('Seascape') !== -1;
    if (selectedFilter === 'Sacred & Traditional') return /Traditional|Devotional|Sacred|Pichwai|Folk/i.test(cat);
    if (selectedFilter === 'Still Life') return cat.indexOf('Still Life') !== -1;
    if (selectedFilter === 'Works on Paper') return cat.indexOf('Works on Paper') !== -1;
    return false;
  }

  function saveShortlist() {
    storage.set('rivaniShortlist', shortlist);
    renderCount();
  }

  var audioChime = null;
  function playChime() {
    try {
      if (!audioChime) {
        audioChime = new Audio('final.mp3');
      }
      audioChime.currentTime = 0;
      var promise = audioChime.play();
      if (promise !== undefined) {
        promise.catch(function () { /* safe browser audio restriction catch */ });
      }
    } catch (e) {}
  }

  function renderCount() {
    var el = $('#shortlistCount');
    if (el) el.textContent = shortlist.length;
  }

  function toggleShortlist(id) {
    var wasIn = shortlist.indexOf(id) !== -1;
    if (wasIn) {
      shortlist = shortlist.filter(function (x) { return x !== id; });
    } else {
      shortlist = shortlist.concat([id]);
      playChime();
    }
    saveShortlist();
    renderArt();
    renderShortlist();
  }

  // Hero Background Scrolling Chain of Images
  function initHeroSlideshow() {
    var track = $('.hero-marquee-track');
    if (!track) return;

    var chainImages = [
      'assets/images/image_24.jpg',
      'assets/images/image_27.jpg',
      'assets/images/image_29.jpg',
      'assets/images/image_25.jpg',
      'assets/images/image_28.jpg',
      'assets/images/image_26.jpg',
      'assets/images/image_1.jpg',
      'assets/images/image_2.jpg',
      'assets/images/image_22.jpg',
      'assets/images/image_31.jpg',
      'assets/images/image_33.jpg',
      'assets/images/image_30.jpg'
    ];

    var fullChain = chainImages.concat(chainImages);

    track.innerHTML = fullChain
      .map(function (src) {
        return '<div class="hero-marquee-card" style="background-image: url(\'' + src + '\');"></div>';
      })
      .join('');
  }

  // Advisory Section Slideshow
  function initAdvisorySlideshow() {
    var slider = $('.advisory-slider');
    if (!slider) return;

    var advisoryImages = [
      'assets/images/image_29.jpg',
      'assets/images/image_24.jpg',
      'assets/images/image_28.jpg',
      'assets/images/image_26.jpg',
      'assets/images/image_25.jpg',
      'assets/images/image_33.jpg'
    ];

    slider.innerHTML = advisoryImages
      .map(function (src, idx) {
        return '<div class="advisory-slide ' + (idx === 0 ? 'active' : '') + '" style="background-image: url(\'' + src + '\');"></div>';
      })
      .join('');

    var currentSlide = 0;
    var slides = $$('.advisory-slide');

    if (slides.length > 1) {
      setInterval(function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 4000);
    }
  }

  function renderFilters() {
    var container = $('#filters');
    if (!container) return;
    container.innerHTML = categories
      .map(function (c) {
        return '<button class="filter-btn ' + (filter === c ? 'active' : '') + '" data-filter="' + c + '">' + c.toUpperCase() + '</button>';
      })
      .join('');

    $$('[data-filter]').forEach(function (b) {
      b.onclick = function () {
        filter = b.getAttribute('data-filter');
        renderFilters();
        renderArt();
      };
    });
  }

  function visible() {
    return artworks.filter(function (a) {
      var matchCat = matchCategoryFilter(a.category, filter);
      var q = query.toLowerCase().trim();
      var matchQuery =
        !q ||
        ([
          a.title,
          a.canonical_title,
          a.source_title,
          a.artist,
          a.category,
          a.medium,
          a.support,
          a.framed_description,
          a.dimensions,
          a.price,
          a.description,
          a.notes
        ].filter(Boolean).join(' ').toLowerCase().indexOf(q) !== -1);
      return matchCat && matchQuery;
    });
  }

  function renderArt() {
    var list = visible();
    var countEl = $('#shownCount');
    if (countEl) countEl.textContent = list.length + ' OF ' + artworks.length + ' WORKS';

    var grid = $('#artGrid');
    if (!grid) return;

    if (!list.length) {
      grid.innerHTML = '<div style="grid-column: 1/-1; padding: 40px 0; text-align: center; color: var(--ink-soft); font-family: \'Playfair Display\', serif; font-size: 20px;">No artworks matched your query.</div>';
      return;
    }

    grid.innerHTML = list
      .map(function (a) {
        var isSaved = shortlist.indexOf(a.id) !== -1;
        var frameSnippet = a.framed_description || a.frame_type || 'Custom Archival Frame';
        return [
          '<article class="art-card">',
          '  <div class="image-wrap" data-open="' + a.id + '">',
          '    <img loading="lazy" src="' + a.image + '" alt="' + a.title + ' by ' + a.artist + '">',
          '    <button class="save-btn ' + (isSaved ? 'saved' : '') + '" data-save="' + a.id + '" aria-label="Shortlist ' + a.title + '">',
          '      ' + (isSaved ? '♥' : '♡'),
          '    </button>',
          '  </div>',
          '  <div class="card-meta">',
          '    <div class="artist-cat">',
          '      <span>' + a.category + '</span>',
          '      <span class="card-size">' + (a.dimensions || '') + '</span>',
          '    </div>',
          '    <h3>' + a.title + '</h3>',
          '    <div class="specs">' + a.medium + ' · ' + frameSnippet + '</div>',
          '    <div class="price-row">',
          '      <div class="price">' + a.price + '</div>',
          '      <button class="view-link" data-open="' + a.id + '">VIEW DETAILS →</button>',
          '    </div>',
          '  </div>',
          '</article>'
        ].join('\n');
      })
      .join('');

    $$('[data-save]').forEach(function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        toggleShortlist(+b.getAttribute('data-save'));
      };
    });

    $$('#artGrid [data-open]').forEach(function (el) {
      el.onclick = function (e) {
        if (e.target.closest('[data-save]')) return;
        openProduct(+el.getAttribute('data-open'));
      };
    });
  }

  function openProduct(id) {
    var a = artworks.find(function (x) { return x.id === id; });
    if (!a) return;

    var whatsappMsg = encodeURIComponent(
      "Hello Rivani Fine Art, I would like to inquire about acquiring '" + a.title + "' (" + a.price + ", Dimensions: " + a.dimensions + ", Frame: " + (a.framed_description || 'Archival Frame') + "). Is this piece available for private viewing or pan-India delivery?"
    );

    var views = (a.views && a.views.length) ? a.views : [a.image];
    var mainImageHtml = '<div class="gallery-main-wrap"><img id="modalMainImg" src="' + views[0] + '" alt="' + a.title + '" loading="eager" /></div>';
    
    var thumbnailsHtml = '';
    if (views.length > 1) {
      var thumbs = views.map(function (src, idx) {
        return '<div class="gallery-thumb ' + (idx === 0 ? 'active' : '') + '" data-thumb-src="' + src + '" role="button" aria-label="Perspective ' + (idx + 1) + '"><img src="' + src + '" alt="' + a.title + ' view ' + (idx + 1) + '"></div>';
      }).join('');
      thumbnailsHtml = '<p class="gallery-views-label">ARCHITECTURAL PERSPECTIVES & VIEWS (' + views.length + ')</p><div class="gallery-thumbnails">' + thumbs + '</div>';
    }

    var isSaved = shortlist.indexOf(a.id) !== -1;
    var priceDisplay = a.price === 'Price on Request' ? 'Price on Request' : a.price + ' (Bespoke Frame Included)';
    var panelRow = (a.panel_count && a.panel_count > 1) ? '<div><span>PANEL COUNT</span><b>' + a.panel_count + ' Panels</b></div>' : '';
    var framedDimRow = (a.framed_dimensions) ? '<div><span>FRAMED DIMENSIONS</span><b>' + a.framed_dimensions + '</b></div>' : '';

    $('#modalContent').innerHTML = [
      '<div class="product-modal">',
      '  <div class="product-gallery">',
      mainImageHtml,
      thumbnailsHtml,
      '  </div>',
      '  <div class="product-info">',
      '    <p class="eyebrow">' + a.category + ' · ' + a.artist + '</p>',
      '    <h2>' + a.title + '</h2>',
      '    <p class="lead">' + a.description + '</p>',
      '    <div class="details">',
      '      <div><span>MEDIUM & SUPPORT</span><b>' + a.medium + '</b></div>',
      (a.dimensions ? '<div><span>ARTWORK DIMENSIONS</span><b>' + a.dimensions + '</b></div>' : ''),
      '      <div><span>ORIENTATION</span><b>' + (a.orientation || 'Standard') + '</b></div>',
      panelRow,
      '      <div><span>FRAMING</span><b>' + (a.framed_description || a.frame_type || 'Custom Museum Frame') + '</b></div>',
      framedDimRow,
      '      <div><span>PRICE</span><b>' + priceDisplay + '</b></div>',
      '      <div><span>AVAILABILITY</span><b>Available for Immediate Acquisition</b></div>',
      '      <div><span>AUTHENTICITY</span><b>Registered Provenance & Certificate</b></div>',
      '    </div>',
      '    <div class="modal-actions">',
      '      <a href="https://wa.me/919820009498?text=' + whatsappMsg + '" target="_blank" rel="noopener" class="button whatsapp-btn full">💬 INQUIRE ON WHATSAPP (+91 9820009498)</a>',
      '      <button class="button dark full" id="modalInquireEmail">✉️ INQUIRE VIA EMAIL</button>',
      '      <button class="button light-outline full" id="modalSave">' + (isSaved ? '♥ REMOVE FROM SHORTLIST' : '♡ ADD TO SHORTLIST') + '</button>',
      '      <button class="text-btn" id="modalInquireForm" style="margin-top: 10px; text-align: center; width: 100%;">Or Fill Direct Inquiry Form ↓</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    // Attach thumbnail click handlers
    $$('.gallery-thumb').forEach(function (thumb) {
      thumb.onclick = function () {
        var src = thumb.getAttribute('data-thumb-src');
        var mainImg = $('#modalMainImg');
        if (mainImg && src) {
          mainImg.src = src;
          $$('.gallery-thumb').forEach(function (t) { t.classList.remove('active'); });
          thumb.classList.add('active');
        }
      };
    });

    $('#modal').classList.add('open');
    $('#modal').setAttribute('aria-hidden', 'false');
    document.body.classList.add('lock');

    var emailInquireBtn = $('#modalInquireEmail');
    if (emailInquireBtn) {
      emailInquireBtn.onclick = function () {
        closeModal();
        openInquiryModal([a]);
      };
    }

    var saveBtn = $('#modalSave');
    if (saveBtn) {
      saveBtn.onclick = function () {
        toggleShortlist(a.id);
        openProduct(a.id);
      };
    }

    var formBtn = $('#modalInquireForm');
    if (formBtn) {
      formBtn.onclick = function () {
        closeModal();
        openInquiryModal([a]);
      };
    }
  }

  function closeModal() {
    var modal = $('#modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
    if (!$('#shortlistDrawer.open') && !$('#inquiryModal.open')) {
      document.body.classList.remove('lock');
    }
  }

  function renderMuse() {
    var museGrid = $('#museGrid');
    if (!museGrid) return;

    var items = (muse && muse.length) ? muse : artworks.map(function (a) {
      return { artworkId: a.id, image: a.image, title: a.title };
    });

    museGrid.innerHTML = items
      .map(function (item) {
        var art = artworks.find(function (a) { return a.id === item.artworkId; }) || artworks[0];
        if (!art) return '';
        return [
          '<div class="muse-item" data-open="' + art.id + '">',
          '  <img loading="lazy" src="' + item.image + '" alt="' + art.title + ' installed in interior">',
          '  <div class="muse-label">',
          '    ' + art.title,
          '    <span>' + (art.dimensions ? art.dimensions : '') + ' · ' + art.price + ' · VIEW ARTWORK →</span>',
          '  </div>',
          '</div>'
        ].join('\n');
      })
      .join('');

    $$('#museGrid [data-open]').forEach(function (el) {
      el.onclick = function () {
        openProduct(+el.getAttribute('data-open'));
      };
    });
  }

  function openDrawer() {
    renderShortlist();
    var drawer = $('#shortlistDrawer');
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('lock');
  }

  function closeDrawer() {
    var drawer = $('#shortlistDrawer');
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    }
    if (!$('#modal.open') && !$('#inquiryModal.open')) {
      document.body.classList.remove('lock');
    }
  }

  function renderShortlist() {
    var chosen = artworks.filter(function (a) { return shortlist.indexOf(a.id) !== -1; });
    var container = $('#shortlistItems');
    var drawerActions = $('#drawerActions') || $('.drawer-actions');
    var copyStatus = $('#copyStatus');
    if (!container) return;

    if (!chosen.length) {
      container.innerHTML = '<p class="empty">Your shortlist is currently empty.<br><span style="font-size: 13px; font-family: sans-serif; color: var(--ink-soft); display: block; margin-top: 8px;">Browse available works and tap the heart icon to curate your collection.</span></p>';
      if (copyStatus) copyStatus.textContent = '';
      if (drawerActions) {
        drawerActions.innerHTML = [
          '<a href="#available" id="drawerExploreBtn" class="button dark full">VIEW THE COLLECTION</a>',
          '<a href="#contact" id="drawerContactBtn" class="button light-outline full">CONTACT US</a>',
          '<a href="https://wa.me/919820009498?text=Hello%20Rivani%20Fine%20Art%2C%20I%20would%20like%20to%20inquire%20about%20your%20art%20collection." target="_blank" rel="noopener" class="button whatsapp-btn full">💬 INQUIRE ON WHATSAPP</a>'
        ].join('\n');

        var deb = $('#drawerExploreBtn');
        if (deb) {
          deb.onclick = function () {
            closeDrawer();
          };
        }
        var dcb = $('#drawerContactBtn');
        if (dcb) {
          dcb.onclick = function () {
            closeDrawer();
          };
        }
      }
      return;
    }

    container.innerHTML = chosen
      .map(function (a) {
        return [
          '<div class="short-item">',
          '  <img src="' + a.image + '" alt="' + a.title + '">',
          '  <div>',
          '    <h4>' + a.title + '</h4>',
          '    <p>' + a.category + ' · ' + a.dimensions + '</p>',
          '    <p><strong>' + a.price + '</strong></p>',
          '  </div>',
          '  <button class="remove" data-remove="' + a.id + '" aria-label="Remove ' + a.title + '">×</button>',
          '</div>'
        ].join('\n');
      })
      .join('');

    if (drawerActions) {
      drawerActions.innerHTML = [
        '<button id="sendShortlistWhatsApp" class="button whatsapp-btn full">💬 INQUIRE ON WHATSAPP</button>',
        '<button id="sendShortlistEmail" class="button dark full">✉️ EMAIL SHORTLIST TO RIVANI</button>',
        '<button id="copyEnquiry" class="button light-outline full">COPY ENQUIRY LIST</button>'
      ].join('\n');

      var ssw = $('#sendShortlistWhatsApp');
      if (ssw) ssw.onclick = sendShortlistWhatsApp;

      var sse = $('#sendShortlistEmail');
      if (sse) sse.onclick = sendShortlistEmail;

      var ce = $('#copyEnquiry');
      if (ce) ce.onclick = copyEnquiry;
    }

    $$('[data-remove]').forEach(function (b) {
      b.onclick = function () {
        toggleShortlist(+b.getAttribute('data-remove'));
      };
    });
  }

  function getShortlistText() {
    var chosen = artworks.filter(function (a) { return shortlist.indexOf(a.id) !== -1; });
    if (!chosen.length) return '';
    var lines = [
      'RIVANI FINE ART — COLLECTOR SHORTLIST',
      '===================================='
    ];
    chosen.forEach(function (a, i) {
      lines.push((i + 1) + '. ' + a.title);
      lines.push('   Category: ' + a.category);
      lines.push('   Dimensions: ' + a.dimensions);
      lines.push('   Frame: ' + (a.framed_description || 'Archival Frame'));
      lines.push('   Price: ' + a.price);
    });
    lines.push('====================================');
    lines.push('Contact: inquiry@rivaniart.com | WhatsApp: +91 9820009498');
    lines.push('Please confirm availability, custom framing options, and private viewing schedules.');
    return lines.join('\n');
  }

  function sendShortlistWhatsApp() {
    var chosen = artworks.filter(function (a) { return shortlist.indexOf(a.id) !== -1; });
    if (!chosen.length) {
      alert('Please add at least one artwork to your shortlist first.');
      return;
    }
    var text = getShortlistText();
    var url = 'https://wa.me/919820009498?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  }

  function sendShortlistEmail() {
    var chosen = artworks.filter(function (a) { return shortlist.indexOf(a.id) !== -1; });
    closeDrawer();
    openInquiryModal(chosen);
  }

  function copyEnquiry() {
    if (!shortlist.length) {
      var st = $('#copyStatus');
      if (st) st.textContent = 'Add at least one work to your shortlist first.';
      return;
    }
    var text = getShortlistText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        var st = $('#copyStatus');
        if (st) {
          st.textContent = '✓ Shortlist copied to clipboard.';
          setTimeout(function () { st.textContent = ''; }, 4000);
        }
      }).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      var st = $('#copyStatus');
      if (st) {
        st.textContent = '✓ Shortlist copied to clipboard.';
        setTimeout(function () { st.textContent = ''; }, 4000);
      }
    } catch (err) {
      var st = $('#copyStatus');
      if (st) st.textContent = 'Select and copy your shortlist items manually.';
    }
    document.body.removeChild(ta);
  }

  var GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzug_SlaVDnXd-pi6uC7LCzgih8sCLhxCcII3UNM9Z0VVGoKLRIHDRK7Phb7fWMmTKi/exec';
  var currentInquiryWorks = [];

  function openInquiryModal(targetWorks) {
    try { playChime(); } catch (e) {}
    currentInquiryWorks = (targetWorks && targetWorks.length) ? targetWorks : [];
    if (!currentInquiryWorks.length && typeof shortlist !== 'undefined' && shortlist.length) {
      currentInquiryWorks = artworks.filter(function (a) { return shortlist.indexOf(a.id) !== -1; });
    }

    var formView = $('#inquiryFormView');
    var successView = $('#inquirySuccessView');
    var worksWrap = $('#popSelectedWorksWrap');
    var worksList = $('#popSelectedList');
    var worksTitle = $('#popSelectedTitle');

    if (formView) formView.style.display = 'block';
    if (successView) successView.style.display = 'none';

    if (worksWrap && worksList) {
      if (currentInquiryWorks.length) {
        worksWrap.style.display = 'block';
        if (worksTitle) {
          worksTitle.textContent = 'Acquisition Artwork' + (currentInquiryWorks.length > 1 ? 's (' + currentInquiryWorks.length + ')' : '');
        }
        worksList.innerHTML = currentInquiryWorks.map(function (w) {
          return [
            '<div class="inquiry-work-card">',
            '  <img src="' + w.image + '" alt="' + w.title + '" />',
            '  <div class="inquiry-work-card-info">',
            '    <h4>' + w.title + '</h4>',
            '    <p>' + (w.category || '') + (w.dimensions ? ' · ' + w.dimensions : '') + '</p>',
            '  </div>',
            '  <div class="inquiry-work-price">' + (w.price || '') + '</div>',
            '</div>'
          ].join('');
        }).join('');
      } else {
        worksWrap.style.display = 'none';
        worksList.innerHTML = '';
      }
    }

    var modal = $('#inquiryModal');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('lock');
  }

  function showInquirySuccess(works, name, phone) {
    var formView = $('#inquiryFormView');
    var successView = $('#inquirySuccessView');
    var successWorksText = $('#successWorksText');
    var successCollectorText = $('#successCollectorText');

    if (formView) formView.style.display = 'none';
    if (successView) successView.style.display = 'block';

    var wList = (works && works.length) ? works : currentInquiryWorks;
    var countText = (wList && wList.length) ? (wList.length === 1 ? wList[0].title : wList.length + ' Artworks') : 'Acquisition Request';

    if (successWorksText) successWorksText.textContent = countText;
    if (successCollectorText) successCollectorText.textContent = (name || 'Collector') + (phone ? ' (' + phone + ')' : '');

    var modal = $('#inquiryModal');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('lock');
  }

  function closeInquiryModal() {
    var modal = $('#inquiryModal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
    if (!$('#modal.open') && !$('#shortlistDrawer.open')) {
      document.body.classList.remove('lock');
    }
  }

  function initApp() {
    initHeroSlideshow();
    initAdvisorySlideshow();
    renderFilters();
    renderArt();
    renderMuse();
    renderCount();
    renderShortlist();

    var searchInput = $('#searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        query = e.target.value;
        renderArt();
      });
    }

    var searchBtn = $('#searchBtn');
    if (searchBtn) {
      searchBtn.onclick = function () {
        var avail = document.querySelector('#available');
        if (avail) {
          avail.scrollIntoView({ behavior: 'smooth' });
          var input = $('#searchInput');
          if (input) setTimeout(function () { input.focus(); }, 350);
        }
      };
    }

    var sb = $('#shortlistBtn');
    if (sb) sb.onclick = openDrawer;

    var os = $('#openShortlist');
    if (os) os.onclick = openDrawer;

    var ssw = $('#sendShortlistWhatsApp');
    if (ssw) ssw.onclick = sendShortlistWhatsApp;

    var sse = $('#sendShortlistEmail');
    if (sse) sse.onclick = sendShortlistEmail;

    var ce = $('#copyEnquiry');
    if (ce) ce.onclick = copyEnquiry;

    var directEmailBtn = $('#directEmailBtn');
    if (directEmailBtn) {
      directEmailBtn.onclick = function (e) {
        e.preventDefault();
        openInquiryModal();
      };
    }

    var popWaBtn = $('#popWhatsAppBtn');
    if (popWaBtn) {
      popWaBtn.onclick = function () {
        var name = ($('#popName') && $('#popName').value.trim()) || 'Collector';
        var phone = ($('#popPhone') && $('#popPhone').value.trim()) || '';
        var city = ($('#popCity') && $('#popCity').value.trim()) || '';
        var msg = ($('#popMessage') && $('#popMessage').value.trim()) || '';
        var worksSummary = currentInquiryWorks.map(function (w, i) { return (i + 1) + '. ' + w.title + ' (' + (w.price || '') + ')'; }).join('\n');

        var text = [
          'RIVANI FINE ART — ACQUISITION INQUIRY',
          'Name: ' + name,
          (phone ? 'Phone: ' + phone : ''),
          (city ? 'City / Location: ' + city : ''),
          (worksSummary ? 'Artworks:\n' + worksSummary : ''),
          (msg ? 'Notes: ' + msg : ''),
          '-----------------------------------',
          'Sent to Rivani Fine Art desk.'
        ].filter(Boolean).join('\n');

        window.open('https://wa.me/919820009498?text=' + encodeURIComponent(text), '_blank');
      };
    }

    var popForm = $('#popInquiryForm');
    if (popForm) {
      popForm.onsubmit = function (e) {
        e.preventDefault();
        try { playChime(); } catch (err) {}
        var name = ($('#popName') && $('#popName').value.trim()) || '';
        var phone = ($('#popPhone') && $('#popPhone').value.trim()) || '';
        var email = ($('#popEmail') && $('#popEmail').value.trim()) || '';
        var city = ($('#popCity') && $('#popCity').value.trim()) || '';
        var message = ($('#popMessage') && $('#popMessage').value.trim()) || '';

        if (!name || !phone) {
          alert('Please enter your Name and Phone / WhatsApp number.');
          return;
        }

        var btn = $('#popSubmitBtn');
        if (btn) {
          btn.disabled = true;
          btn.textContent = '⏳ SUBMITTING REQUEST...';
        }

        var worksSummary = currentInquiryWorks.map(function (w, i) {
          return (i + 1) + '. ' + w.title + ' (' + (w.price || '') + (w.dimensions ? ', ' + w.dimensions : '') + ')';
        }).join('\n');

        var fullMsg = [
          (worksSummary ? 'Works of Interest:\n' + worksSummary : 'General acquisition inquiry from website.'),
          (city ? 'Location: ' + city : ''),
          (message ? 'Collector Notes: ' + message : '')
        ].filter(Boolean).join('\n\n');

        var payload = new URLSearchParams();
        payload.append('name', name);
        payload.append('phone', phone);
        payload.append('email', email || 'N/A');
        payload.append('message', fullMsg);

        fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: payload.toString()
        })
          .then(function () {
            showInquirySuccess(currentInquiryWorks, name, phone);
            popForm.reset();
          })
          .catch(function (err) {
            console.error('Submission error:', err);
            showInquirySuccess(currentInquiryWorks, name, phone);
            popForm.reset();
          })
          .finally(function () {
            if (btn) {
              btn.disabled = false;
              btn.textContent = '✉️ SUBMIT ACQUISITION REQUEST';
            }
          });
      };
    }

    $$('[data-close]').forEach(function (x) { x.onclick = closeModal; });
    $$('[data-drawer-close]').forEach(function (x) { x.onclick = closeDrawer; });
    $$('[data-inquiry-close]').forEach(function (x) { x.onclick = closeInquiryModal; });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
        closeDrawer();
        closeInquiryModal();
      }
    });

    var contactForm = $('#contactForm');
    if (contactForm) {
      var getFormData = function () {
        var name = ($('#formName') && $('#formName').value.trim()) || '';
        var phone = ($('#formPhone') && $('#formPhone').value.trim()) || '';
        var email = ($('#formEmail') && $('#formEmail').value.trim()) || '';
        var city = ($('#formCity') && $('#formCity').value.trim()) || '';
        var message = ($('#formMessage') && $('#formMessage').value.trim()) || '';
        return { name: name, phone: phone, email: email, city: city, message: message };
      };

      var submitWa = $('#submitWhatsApp');
      if (submitWa) {
        submitWa.onclick = function () {
          var data = getFormData();
          if (!data.name || !data.phone) {
            alert('Please provide your Name and Phone / WhatsApp number.');
            return;
          }
          var text = [
            'RIVANI FINE ART — ACQUISITION INQUIRY',
            'Name: ' + data.name,
            'Phone / WhatsApp: ' + data.phone,
            (data.email ? 'Email: ' + data.email : ''),
            (data.city ? 'City / Location: ' + data.city : ''),
            (data.message ? 'Notes / Request: ' + data.message : ''),
            '-----------------------------------',
            'Inquiry sent to Rivani Fine Art desk.'
          ]
            .filter(Boolean)
            .join('\n');

          window.open('https://wa.me/919820009498?text=' + encodeURIComponent(text), '_blank');
          var fs = $('#formStatus');
          if (fs) {
            fs.style.color = '#195237';
            fs.textContent = '✓ Opening WhatsApp with your inquiry details...';
          }
        };
      }

      contactForm.onsubmit = function (e) {
        e.preventDefault();
        playChime();
        var data = getFormData();
        if (!data.name || !data.phone) {
          alert('Please provide your Name and Phone / WhatsApp number.');
          return;
        }

        var submitBtn = $('#submitFormBtn');
        var fs = $('#formStatus');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = '⏳ SUBMITTING REQUEST...';
        }
        if (fs) {
          fs.style.color = 'var(--ink-soft)';
          fs.textContent = 'Submitting your request to Rivani Fine Art desk...';
        }

        var fullMessage = data.message;
        if (data.city) {
          fullMessage = 'City / Location: ' + data.city + (fullMessage ? '\n\n' + fullMessage : '');
        }

        var payload = new URLSearchParams();
        payload.append('name', data.name);
        payload.append('phone', data.phone);
        payload.append('email', data.email || 'N/A');
        payload.append('message', fullMessage || 'Acquisition inquiry from website.');

        fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: payload.toString()
        })
          .then(function () {
            if (fs) {
              fs.style.color = '#195237';
              fs.innerHTML = '✓ <strong>Thank you!</strong> Your acquisition request has been submitted. Our curatorial team will review your inquiry and connect with you shortly.';
            }
            showInquirySuccess([], data.name, data.phone);
            contactForm.reset();
          })
          .catch(function (err) {
            console.error('Submission error:', err);
            showInquirySuccess([], data.name, data.phone);
            contactForm.reset();
          })
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = '✉️ SUBMIT ACQUISITION REQUEST';
            }
          });
      };
    }

    window.openInquiryModal = openInquiryModal;
    window.closeInquiryModal = closeInquiryModal;
    window.openDrawer = openDrawer;
    window.closeDrawer = closeDrawer;
    window.sendShortlistEmail = sendShortlistEmail;
    window.playChime = playChime;
  }

  // Execute immediately and on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();

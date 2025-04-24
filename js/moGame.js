const images = [
    { src: 'imgM/Unpacking.jpg', title: 'Unpacking',  caption1:' แค่แกะกล่องย้ายบ้าน…แต่กลับรู้สึกเหมือนเปิดบันทึกชีวิต',caption2:'ทำไมควรเล่น?\n  เกมนี้ไม่มีเวลาจำกัดไม่มีคะแนนกิจกรรมมีแค่จัดของให้เข้าที่ เล่นแล้วเหมือนได้ฮีลใจ' }, 

    { src: 'imgM/Dumb Ways to Die.jpg', title: ' Dumb Ways to Die',  caption1:'ช่วยเหล่าเจ้าตัวประหลาดจากความตายแปลก ๆ แบบฮา ๆ',caption2:'ทำไมควรเล่น?\n  เกมนี้ไม่มีเวลาจำกัดไม่มีคะแนนกิจกรรมมีแค่จัดของให้เข้าที่ เล่นแล้วเหมือนได้ฮีลใจ' }, 

    { src: 'imgM/Good Pizza, Great Pizza.jpg', title: 'Good Pizza, Great Pizza',  caption1:' ปิดร้านพิซซ่าเล็ก ๆ ให้ลูกค้าหน้าแปลกได้กินพิซซ่าแบบที่พวกเขาฝันถึง!',caption2:'ทำไมควรเล่น?\n  เกมมีความเรียบง่ายแต่น่ารัก ลูกค้าพูดประโยคแปลก ๆ ที่คุณต้องตีความให้เข้าใจ 😄' }, 

    { src: 'imgM/The Last of Us (Part I & II).webp', title: 'The Last of Us (Part I & II)',  caption1:' เมื่อต้องเอาชีวิตรอดในโลกหลังโรคระบาด ความรัก... ความสูญเสีย... และความแค้น จะกลายเป็นเรื่องเดียวกัน',caption2:'ทำไมควรเล่น?\n  เล่าเรื่องแบบภาพยนตร์ ตัวละครลึก และดราม่าระดับน้ำตาไหล ' }, 

    { src: 'imgM/UNTILTHEN.jpg', title: 'UNTIL THEN',  caption1:' เมื่อเรื่องธรรมดาในชีวิตวัยรุ่น กลายเป็นประตูสู่ความลับที่เปลี่ยนโลกของเขาไปตลอดกาล..ในเมืองเล็ก ๆ \nที่อบอวลด้วยความทรงจำและปริศนา ใครกันแน่ที่หายไป? หรือเป็นคุณที่กำลังจะลืม?',caption2:'ทำไมควรเล่น?\n  ✨ เนื้อเรื่องเข้มข้น ลึกลับ และอบอุ่นในเวลาเดียวกัน🎨 งานภาพพิกเซลอาร์ตสวยจับใจ\n🎧 เพลงประกอบแนว lo-fi สุดละมุน🌍 ถ่ายทอดวัฒนธรรมฟิลิปปินส์แบบเรียลจริง' }, 

    { src: 'imgM/Red Dead Redemption 2.jpg', title: 'Red Dead Redemption 2',  caption1:' เมื่อยุคคาวบอยใกล้ถึงจุดจบ นักล่าฝันต้องเลือกระหว่างเส้นทางของศรัทธา หรือการล้างแค้น',caption2:'ทำไมควรเล่น?\n เนื้อเรื่องยิ่งใหญ่ ตัวละครเขียนดีมาก บรรยากาศเหมือนดูซีรีส์ฝรั่งชั้นเยี่ยม' }, 
    
    { src: 'imgM/Spiritfarer.jpg', title: 'Spiritfarer',  caption1:' คุณคือผู้ส่งดวงวิญญาณไปสู่ภพหน้า ด้วยการดูแลพวกเขาเป็นครั้งสุดท้าย',caption2:'ทำไมควรเล่น?\n   เกมซึ้งใจที่ผสมการบริหาร การสร้าง ความรัก และการจากลาไว้อย่างละมุนที่สุด' }, 

    { src: 'imgM/TOEMAPhotoAdventure.jpg', title: 'TOEM: A Photo Adventure',  caption1:'เดินทางด้วยกล้องถ่ายรูป และช่วยผู้คนด้วยมุมมองใหม่ ๆ',caption2:'ทำไมควรเล่น?\n  เกมขาวดำแบบภาพสเก็ตซ์ ใช้กล้องถ่ายภาพแทนการต่อสู้ 📷' }, 

    
  ];
  
     function getRandomMovie() {
    const rnd = Math.floor(Math.random() * images.length);
    const sel = images[rnd];
  
    const img      = document.getElementById('randomImg');
    const title    = document.getElementById('title');
    const caption1 = document.getElementById('caption1');
    const caption2 = document.getElementById('caption2');
  
    img.src = sel.src;
    img.alt = sel.title;
    title.textContent = sel.title;
  
    // ใส่ <br> ถ้ามีบรรทัดใหม่
    caption1.innerHTML = sel.caption1.replace(/\n/g, '<br>');
    caption2.innerHTML = sel.caption2.replace(/\n/g, '<br>');
       // ลบขนาดพิเศษของรูปแรกเมื่อสุ่มแล้ว
  img.classList.remove('first-img');
  }
  
  document.querySelectorAll('.nav-link').forEach(link => {
   if (window.location.href.includes(link.getAttribute('href'))) {
     link.classList.add('active');
   }
 });

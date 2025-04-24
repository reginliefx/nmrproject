const images = [
    { src: 'imgM/TheShawshankRedemption (1994).jpg', title: 'The Shawshank Redemption (1994)',  caption1: 'เรื่องย่อ: แอนดี้ ดูเฟรนซ์ ถูกตัดสินจำคุกตลอดชีวิต \n แม้จะบริสุทธิ์ ภายในเรือนจำเขาได้ใช้สติปัญญาเปลี่ยนชีวิตทั้งตัวเองและคนรอบข้าง' },

    { src: 'imgM/TheGodfather(1972).jpg', title: 'The Godfather (1972)',       caption1: 'เรื่องย่อ: เรื่องของมาเฟียคอร์เลโอเน่ ผู้ครองอำนาจในโลกอาชญากรรม \n เมื่อดอนวีโต้ถูกลอบทำร้าย ลูกชายจึงต้องก้าวขึ้นมารับตำแหน่ง' },

    { src: 'imgM/TheDark Knight(2008).webp', title: ' The Dark Knight (2008) ', caption1: 'เรื่องย่อ: แบทแมนต่อกรกับโจ๊กเกอร์ วายร้ายอัจฉริยะที่ปั่นป่วนเมืองก็อธแธมและจิตใจมนุษย์' },

    { src: 'imgM/12_Angry_Men_(1957).jpg', title: ' 12 Angry Men (1957)',      caption1: 'เรื่องย่อ: ลูกขุน 12 คนต้องลงมติในคดีฆาตกรรม แต่มีเพียงคนเดียว\nที่สงสัยว่าจำเลยอาจบริสุทธิ์ และพยายามเปลี่ยนใจคนอื่น' },

    { src: 'imgM/12_Angry_Men_(1957).jpg', title: 'Schindlers List (1993)',  caption1: 'เรื่องย่อ: นักธุรกิจเยอรมันช่วยชีวิตชาวยิวกว่าพันคนในช่วงสงครามโลกด้วยการจ้างให้มาทำงานในโรงงานของเขา' },

    { src: 'imgM/PulpFiction (1994).jpg', title: 'Pulp Fiction (1994)',       caption1: 'เรื่องย่อ: เรื่องราวหลายเส้นทางของอาชญากร นักฆ่า และนักมวย \n ที่เชื่อมโยงกันในแบบฉบับเควนติน ทารันติโน่' },

    { src: 'imgM/Fight-Club.jpg', title: 'Fight-Club', caption1: 'เรื่องย่อ: ชายที่เบื่อหน่ายชีวิตประจำวันเริ่มคลับลับสำหรับการต่อสู้\nระบายอารมณ์ และเผชิญกับตัวตนที่แท้จริง' },

    { src: 'imgM/Forrest Gump (1994).jpg', title: 'Forrest Gump (1994)',    caption1: 'เรื่องย่อ: ชายผู้มีไอคิวต่ำแต่จิตใจบริสุทธิ์ เดินทางผ่านเหตุการณ์ประวัติศาสตร์สำคัญในอเมริกา โดยไม่รู้ตัว' }
  ];
  
  function getRandomMovie() {
    // สุ่ม index
    const rnd = Math.floor(Math.random() * images.length);
    const sel = images[rnd];
  
    // อัปเดตรูป ชื่อหนัง และคำอธิบาย
    const img   = document.getElementById('randomImg');
    const title = document.getElementById('title');
    const cap   = document.getElementById('caption1');

    cap.innerHTML = sel.caption1.replace(/\n/g,'<br>');

    img.src = sel.src;
    img.alt = sel.title;      // ใช้ชื่อหนังสั้น ๆ เป็น alt
    title.textContent = sel.title;
    cap.textContent   = sel.caption1;

     // ลบขนาดพิเศษของรูปแรกเมื่อสุ่มแล้ว
  img.classList.remove('first-img');
  
  }
  
  document.querySelectorAll('.nav-link').forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

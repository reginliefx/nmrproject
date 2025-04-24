// ฟังก์ชันสำหรับเลื่อนหน้ากลับไปบนสุดแบบ smooth
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// เพิ่ม event listener เมื่อมีการ scroll หน้าเว็บ
window.addEventListener('scroll', () => {
  const btn = document.getElementById("backToTop"); // ดึงปุ่มที่มี id = "backToTop"
  
  const scrollY = window.scrollY || document.documentElement.scrollTop; // ตรวจสอบว่าผู้ใช้เลื่อนลงมาถึงไหน
  const docHeight = document.documentElement.scrollHeight; // ความสูงทั้งหมดของหน้าเว็บ
  const windowHeight = window.innerHeight; // ความสูงของหน้าต่างเบราว์เซอร์ (ไม่รวม scroll)

  // เงื่อนไขแสดงปุ่ม:
  // - ผู้ใช้เลื่อนลงมาเกิน 300px
  // - และเหลือระยะ scroll ด้านล่างน้อยกว่า 400px (ใกล้จะสุดหน้าแล้ว)
  if (scrollY > 300 && (docHeight - scrollY - windowHeight) < 400) {
    btn.classList.add("show"); // แสดงปุ่มโดยเพิ่ม class "show"
  } else {
    btn.classList.remove("show"); // ซ่อนปุ่มถ้าไม่เข้าเงื่อนไข
  }
});

  
// ปุ่มเปลี่ยนธีม
  function toggleTheme() {
    const body = document.body;
    const sound = document.getElementById('themeSound');

    if (sound) {
      sound.currentTime = 0; // ให้เริ่มใหม่ทุกครั้งที่กด
      sound.play();
    }
  
    // เพิ่มคลาส transition
    body.classList.add('theme-transition');
  
    // ถ้าปัจจุบันเป็นธีมส้ม → เปลี่ยนกลับเป็นธีมดั้งเดิม
    if (body.classList.contains('orange-theme')) {
      body.classList.remove('orange-theme');
    } 
    // ถ้าเป็นธีมน้ำเงิน → เปลี่ยนเป็นธีมส้ม
    else if (body.classList.contains('blue-theme')) {
      body.classList.remove('blue-theme');
      body.classList.add('orange-theme');
    } 
    // ถ้ายังไม่ใช่ธีมอะไร → เปลี่ยนเป็นธีมน้ำเงิน
    else {
      body.classList.add('blue-theme');
    }
  
    // ลบคลาส transition หลังจาก animation เสร็จ
    setTimeout(() => {
      body.classList.remove('theme-transition');
    }, 500); // ต้องตรงกับเวลาใน CSS
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
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

document.querySelectorAll('.nav-link').forEach(link => {
  if (window.location.href.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});

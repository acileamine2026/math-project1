<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
  <meta charset="UTF-8">
  <title>منصة الرياضيات</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

  <!-- القائمة -->
  <div class="sidebar">

    <h2>الدروس</h2>

    <button onclick="loadLesson(0)">
      المثلثات
    </button>

    <button onclick="loadLesson(1)">
      المعين
    </button>

    <button onclick="loadLesson(2)">
      المعادلات التربيعية
    </button>

  </div>

  <!-- المحتوى -->
  <div class="content">

    <div class="score-box">
      ⭐ النقاط:
      <span id="score">0</span>
    </div>

    <h1 id="title"></h1>

    <p id="text"></p>

    <div id="quiz"></div>

  </div>

</div>

<script src="script.js"></script>

</body>
</html>

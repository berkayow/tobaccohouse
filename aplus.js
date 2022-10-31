function aplus(){
    document.body.innerHTML = 
    `
    <!-- NAVBAR BAŞLANGIÇ -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-info" aria-label="Ninth navbar example">
      <div class="container-xl">
        <a href="index.html" class="navbar-brand ms-2">
          <img src="https://www.tobaccohouse.com.tr/images/logo.png" alt="Logo" width="200" height="75">
        </a>
        <a class="navbar-brand" href="index.html">Tobacco <span class="text-success">House</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobil" aria-controls="mobil" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="mobil">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active fs-6 ms-2" aria-current="page" href="index.html">Ana Sayfa</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active fs-6 ms-2" href="#" data-bs-toggle="dropdown" aria-expanded="false">Çakmak Modelleri</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Zippo</a></li>
                <li><a class="dropdown-item" href="#">Cohiba</a></li>
                <li><a class="dropdown-item" href="#">Parmida</a></li>
                <li><a class="dropdown-item" href="#">Lamborghini</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active fs-6 ms-2" href="#" data-bs-toggle="dropdown" aria-expanded="false">Puro Ve Aksesuarları</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Purolar</a></li>
                <li><a class="dropdown-item" href="#">Puro Kesici Ve Deliciler</a></li>
                <li><a class="dropdown-item" href="#">Puro Kılıfları</a></li>
                <li><a class="dropdown-item" href="#">Puro Kutuları</a></li>
                <li><a class="dropdown-item" href="#">Puro Küllükleri</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active fs-6 ms-2" href="#" data-bs-toggle="dropdown" aria-expanded="false">Pipo Ve Aksesuarları</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">Pipolar</a></li>
                <li><a class="dropdown-item" href="#">Pipo Çakmakları</a></li>
                <li><a class="dropdown-item" href="#">Pipo Çantaları</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active fs-6 ms-2" aria-current="page" href="#">Hakkımızda</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active fs-6 ms-2" href="#" data-bs-toggle="dropdown" aria-expanded="false">İletişim</a>
              <ul class="dropdown-menu">
                <li><a onclick="aqua()" class="dropdown-item" href="#">Aqua Florya Avm</a></li>
                <li><a onclick="aplus()" class="dropdown-item" href="#">A Plus Avm</a></li>
                <li><a onclick="polat()" class="dropdown-item" href="#">Polat Renaissance Otel</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- ADRES BAŞLANGIÇ -->
    <div class="container mt-5">
        <div class="row ms-5">
          <div class="col mt-3">
            <b>Ataköy Plus Alışveriş Merkezi</b><br />
            Ataköy A Plus AVM Hizmet Katı No: 1/1<br />
            Ataköy - Bakırköy / İstanbul<br />
            Tel: 0 212 559 77 17<br />
            E-Posta: atakoy@tobaccohouse.com.tr
          </div>
          <div class="col me-5 mt-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.1287826414364!2d28.84820151522411!3d40.97866077930382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3f3f0646eaf%3A0xdd179987ffc49055!2sA%20Plus%20AVM!5e0!3m2!1str!2str!4v1667004371673!5m2!1str!2str" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <!-- FOOTER BAŞLANGIÇ -->
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <a target="_blank" href="https://berkayow.github.io/" class="col-md-4 mb-0 text-muted navbar-brand">&copy; 2022 Berkay Çakır</a>
            <a class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            </a>
        
            <ul class="nav col-md-4 justify-content-end">
              <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Ana Sayfa</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Hakkımızda</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">İletişim</a></li>
            </ul>
          </footer>
        </div>

    `
  } 
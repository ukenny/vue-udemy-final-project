<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-navigation mb-2 pb-0 pt-0">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link
            to="/"
            activeClass="active"
            exact
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Home</a>
          </router-link>
          <router-link
            to="/portfolio"
            activeClass="active"
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link
            to="/stocks"
            activeClass="active"
            tag="li"
            class="nav-item"
          >
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">End Day</a>
          </li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu bg-dark">
              <li class="nav-item">
                <a href="#" class="nav-link">Save Data</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
a:active,
a:hover,
a:focus {
  outline: none !important;
  box-shadow: none;
}
.active {
  background-color: rgb(46, 3, 190);
}
.bg-navigation {
  background-color: darkblue;
}
</style>

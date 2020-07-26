<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand">
      LOGO
    </span>
    <div>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link"> Heroes </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/villains"> Villains </router-link>
        </li>
      </ul>
      <span class="mr-5" style="color: purple;">
        Total heroes: totalHeroes
      </span>
      <span class="mr-5" style="color: purple;">
        Total villains: totalVillains
      </span>
    </div>
  </nav>
</template>

<script></script>

<style scoped></style>

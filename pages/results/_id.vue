<template>
  <div>
    <h1 class="mt-10">
      El resultado de tu busqueda es: {{ $route.params.id }}
    </h1>
    {{ coursesData }}
  </div>
</template>
<script>
export default {
  // middleware: 'search',
  // asyncData ({ $axios, params, store }) {
  //   return $axios.get('https://6053662645e4b30017291968.mockapi.io/courses/segoapi/' + params.id)
  //     .then((response) => {
  //       return { coursesData: response.data.results }
  //     })
  // }
}
</script>

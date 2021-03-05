export default function () {
  if (localStorage.getItem('token') === null) {
      window.location.href = '/'
    }
}

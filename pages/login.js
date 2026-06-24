export function login() {
  return `
    <form action="/submit" method="post">
    </br>
    <input type="text" placeholder="enter name">
    </br>
    </br>
    <input type="password" placeholder="enter password">
    </br>
    </br>
    <button>Login</button>
    </form>
        <a href="/">Go to Home</a>
    `;
}

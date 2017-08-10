<html>
<header>
  <style> a:link { text-decoration: none; } </style>
</header>
<body>
  GitHub org: <%= org %>
  <ul>
    <% data.forEach(function(item){ %>
      <li>
        <a href="<%= item.url %>">
          <%= item.name %> - <%= item.description %>
        </a>
      </li>
    <% }); %>
  </ul>
</body>
</html>
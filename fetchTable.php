<?php
  include('connect.php');
  
  $sql = "select * from contact";
  $result = mysqli_query($connection,$sql) or die("bad query");

  echo '<table id="myTable" class="display">';
  echo '<thead><tr><th>name</th><th>email</th><th>message</th><th>time</th></tr></thead>';
  echo '<tbody>';
  while($row = mysqli_fetch_assoc($result)){
    echo "<tr><td>{$row['name']}</td><td>{$row['email']}</td><td>{$row['message']}</td><td>{$row['time']}</td></tr>";
  }
  echo "</tbody></table>";
?>

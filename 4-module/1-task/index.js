function makeFriendsList(names) {


  const ul = document.createElement('ul');

  names.forEach(friend => {
    const li = document.createElement('li');
    li.textContent = `${names.firstName} ${names.lastName}`;
    ul.appendChild(li);
  });

  return ul;
}
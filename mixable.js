// We can have multiple mixable containers on the page.
Array.from(document.querySelectorAll(".mixable")).forEach((container) => {
  const items = Array.from(container.querySelectorAll(".mixable__item"));

  // Clone all the mixable items so we can shuffle them around
  const newItems = items
    .map((node) => node.cloneNode(true))
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

  // Swap them and add a visible class
  newItems.forEach((newItem, i) => {
    const oldItem = items[i];
    newItem.classList.add("mixable__item--moved");
    oldItem.parentNode.insertBefore(newItem, oldItem);
    oldItem.parentNode.removeChild(oldItem);
  });
});

import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'linkables-linkable-image';
      else div.className = 'linkables-linkable-body';
    });
    ul.append(li);
  });


ul.querySelectorAll('img').forEach((img) => {
  
  const picture = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
  let caption = dom.createElement("div");
  caption.className = "linkables-linkable-url";
  caption.textContent = img.src;
  img.closest('picture').replaceWith(picture)
  picture.insertAdjacentElement(caption);
  
});


  block.textContent = '';
  block.append(ul);
}

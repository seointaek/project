export default function List({ list, i, openModal, delItem}) {
  return (
    <li className="list">
      <p onClick={() => openModal(i)}>
        {i + 1} - {list}
      </p>
      <i class="fa-solid fa-trash" 
      onClick={() => {
          delItem(i);
      }}>
      </i>
    </li>
  );
}

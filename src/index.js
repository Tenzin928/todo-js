import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = inputText;
  p.className = "list-name";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode.parentNode;

    const returnButton = document.createElement("Button");
    returnButton.innerText = "戻す";

    div.appendChild(returnButton);
    div.removeChild(completeButton);
    div.removeChild(deleteButton);

    document.getElementById("compreted-list").appendChild(completeTarget);

    deleteFromIncomplete(completeTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomplete(deleteButton.parentNode.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

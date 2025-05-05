export function Todo(newTitle, id = null) {

    const uuid = id ?? crypto.randomUUID();
    let isChecked = false;
    const title = newTitle;

    /** Retornar o json a ser salvo */
    this.toJson = () => {
        return {
            isChecked: isChecked,
            title: title
        }
    }

    /** Retornar o id */
    this.getUuid = () => {
        return uuid;
    }


    this.setIsCheck = (checked) => {
        isChecked = checked;
    }

    /** Criar o elemento li */
    this.render = function (toggleCallback, deleteCallback) {
        const liElement = document.createElement('li');
        liElement.className = 'list-group-item d-flex justify-content-between align-items-center';

        const labelElement = document.createElement('label');
        labelElement.className = "form-check flex-grow-1 d-flex align-items-center";
        labelElement.style = "cursor:pointer";

        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.className = 'form-check-input me-2';
        checkboxElement.checked = isChecked;
        checkboxElement.addEventListener("change", () => {
            toggleCallback(uuid);
        });

        const spanElement = document.createElement('span');
        spanElement.textContent = title;
        if (isChecked) {
            spanElement.className = 'text-decoration-line-through text-muted';
        }

        labelElement.appendChild(checkboxElement);
        labelElement.appendChild(spanElement);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.className = 'btn btn-sm btn-danger ms-2';
        deleteButtonElement.textContent = 'Excluir';
        deleteButtonElement.addEventListener("click", () => {
            deleteCallback(uuid);
        });

        liElement.appendChild(labelElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }
}

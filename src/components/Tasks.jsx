import React from 'react';

export function Tasks({
    items,
    bucketIndex,
    markTodoDone,
    removeItem,
}) {
    const itemsElement = items.map((item, i) => {
        var todoClass = item.done ?
            "done" : "undone";

        return (
            <li className="list-group-item m10" key={i}>
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={() => {
                        markTodoDone(i, bucketIndex);
                    }}>
                    </span>
                    {item.value}
                    <div className = "taskDeleteParent">
                        <span class="glyphicon glyphicon-remove" onClick={() => {
                            removeItem(i, bucketIndex);
                        }}>
                        </span>
                    </div>
                </div>
            </li>
        );
    })

    return (
        <ul className="list-group"> {itemsElement} </ul>
    );
}
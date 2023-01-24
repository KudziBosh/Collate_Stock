import React from 'react'
import {TbArrowsDownUp} from "react-icons/tb"
import {SiTarget} from 'react-icons/si'

function List(props) {
  return (
    <div><div >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border px-8 ">
<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Category <TbArrowsDownUp/></span></th>
<th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Label<TbArrowsDownUp/></span></th>

<th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Itemname<TbArrowsDownUp/></span></th>
<th scope="col" class="py-3 px-6 "><span className="flex flex-row justify-between">Quantity<TbArrowsDownUp/></span></th>
<th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">size<TbArrowsDownUp/></span></th>
<th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">created_by<TbArrowsDownUp/></span></th>
<th scope="col" class="py-3 px-6 "><span className="flex flex-row justify-between">reorder_level<TbArrowsDownUp/></span></th>
<th scope="col" class="py-3 px-6  "><span className="flex flex-row justify-between">Lastupdated<TbArrowsDownUp/></span></th>
</tr>
</thead>
<tbody>
<tr>
<td class="py-4 px-6"> {props.category}
</td>
<td class="py-4 px-6">{props.label}</td>
<td class="py-4 px-6">{props.item_name}</td>
<td class="py-4 px-6">{props.quantity}</td>
<td class="py-4 px-6">{props.size}</td>
<td class="py-4 px-6">{props.created_by}</td>
<td class="py-4 px-6">

{props.reorder_level}
</td>
<td class="py-4 px-6">{props.last_updated}</td>
</tr>




</tbody>
</table>
</div></div>
  )
}

export default List
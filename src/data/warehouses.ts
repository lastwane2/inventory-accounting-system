export const warehouses = [
    {
      id: 'wh1',
      name: 'Центральный склад',
      withGroups: true,
      groups: [
        {
          name: 'Дерево',
          items: [
            { id: 'i1', name: 'Доска 2м', unit: 'м', quantity: 120 },
          ],
        },
      ],
    },
    {
      id: 'wh2',
      name: 'Малярный склад',
      withGroups: false,
      items: [
        { id: 'i2', name: 'Малярный скотч', unit: 'шт', quantity: 150 },
      ],
    },
  ]
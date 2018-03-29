export interface Order {
  id: number,
  title: string
}

export function generateMockOrder(): Order {
  return {
    id: 1,
    title: 'title'
  };
}

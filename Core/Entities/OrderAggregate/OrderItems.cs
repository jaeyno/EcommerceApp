namespace Core.Entities.OrderAggregate
{
    public class OrderItems : BaseEntity
    {
        public OrderItems()
        {
        }

        public OrderItems(ProductItemOrdered itemOrdered, decimal price, int quantity)
        {
            ItemOrdered = itemOrdered;
            Price = price;
            Quantity = quantity;
        }

        public ProductItemOrdered ItemOrdered { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
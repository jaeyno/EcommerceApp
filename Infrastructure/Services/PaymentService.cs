using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Services
{
    public class PaymentService : IPaymentService
    {
        public Task<CustomerBasket> CreateOrUpdateIntent(string basketId)
        {
            throw new System.NotImplementedException();
        }
    }
}
using backendProScrum.Models;
namespace backendProScrum.Repos;
public interface IUser
    {
        Task CreateAcount(Person person);
        Task<Person> GetAcountByEmail(string Email);
        Task UpdateAcount(Person person);
        Task DeleteAcount(string Email);
        Task pushNewToDo(ToDo obj,string Email);
        Task deleteToDo(string _id,string email);
    }
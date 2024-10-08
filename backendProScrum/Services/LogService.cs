using backendProScrum.Models;
using MongoDB.Driver;
namespace backendProScrum.Services;
public class LogService
{

    public Person Register(string Name,string email,string Password)
    {   
        var Todo = new ToDo[]{new ToDo(){Priority=1}};
        //ejemplo de la persona enviada a la DB
        var per = new Person(){Name="aaa",ToDoList=Todo};
        return per;
    }
}
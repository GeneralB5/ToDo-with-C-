using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace backendProScrum.Models;

public class Person
{
[BsonId]
[BsonRepresentation(BsonType.ObjectId)]
public string? Id {get;set;}
[BsonElement("name")]
public string? Name{get;set;}
[BsonElement("email")]
public string? Email{get;set;}
[BsonElement("password")]
public string? Password{get;set;}
[BsonElement("todo")]
public ICollection<ToDo>? ToDoList{get;set;}
}
using System.ComponentModel.DataAnnotations;
namespace backendProScrum.Models;
public class RequestModel
{
    [Required(ErrorMessage = "No se envio ningun objeto de tipo ToDo")]
    public ToDo? obj {get;set;} 
    [Required(ErrorMessage = "El campo Email es obligatorio.")]
    [EmailAddress(ErrorMessage = "El campo Email debe ser una dirección de correo electrónico válida.")]   
    public string? Email {get;set;}
}
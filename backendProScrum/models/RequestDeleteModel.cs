using System.ComponentModel.DataAnnotations;
namespace backendProScrum.Models;
public class RequestDeleteModel
{
    [Required(ErrorMessage = "No se envio ningun ID de tipo String")]
    public string? ID {get;set;} 
    [Required(ErrorMessage = "El campo Email es obligatorio.")]
    [EmailAddress(ErrorMessage = "El campo Email debe ser una dirección de correo electrónico válida.")]   
    public string? Email {get;set;}
}
using System.ComponentModel.DataAnnotations;

namespace backendProScrum.Models;
public class RegisterRequestModel
{
    [Required(ErrorMessage = "El campo Nombre es obligatorio.")]
    public string? Name { get; set; }

    [Required(ErrorMessage = "El campo Email es obligatorio.")]
    [EmailAddress(ErrorMessage = "El campo Email debe ser una dirección de correo electrónico válida.")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "El campo Contraseña es obligatorio.")]
    public string? Password { get; set; }

    [Compare("Password", ErrorMessage = "Las contraseñas no coinciden.")]
    public string? Password2 { get; set; }
}
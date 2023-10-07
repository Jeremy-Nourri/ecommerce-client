export default function getMessageForStatus(statusNumber: number): string {
  switch (statusNumber) {
  case 201:
    return "Compte créé avec succès.";
  case 200:
    return "Action réalisée avec succès.";
  case 409:
    return "Échec, l'utilisateur existe déjà.";
  case 401:
    return "Échec, nom d'utilisateur ou mot de passe incorrect.";
  case 404:
    return "Échec, ressource introuvable.";
  default:
    return "Échec, veuillez réessayer plus tard.";
  }
}

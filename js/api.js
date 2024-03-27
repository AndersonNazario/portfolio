async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/AndersonNazario/portfolio/main/dados/perfil.json'
    const fetching = await fetch(url)
    const profileData = await fetching.json()
    return profileData

}


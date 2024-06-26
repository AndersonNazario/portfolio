function atualizarPerfil(profileData) {
    const fotoperfil = document.getElementById('perfilFoto')
    fotoperfil.src = profileData.photo
    fotoperfil.all = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const proficaoPerfil = document.getElementById('perfilProficao')
    proficaoPerfil.innerText = profileData.job

    const cidadePerfil = document.getElementById('perfilCidade')
    cidadePerfil.innerText = profileData.location

    const telefonePerfil = document.getElementById('perfilTelefone')
    telefonePerfil.innerText = profileData.phone
    telefonePerfil.href = `tel:55${profileData.phone}`

    const emailPerfil = document.getElementById('perfilEmail')
    emailPerfil.innerText = profileData.email
    emailPerfil.href = `mailto:${profileData.email}`


}

function atualizarSkills(profileData) {
    const skills = document.getElementById('skillsPessoaiss')
    skills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function atualizarHardSkills(profileData) {
    const hardSkills = document.getElementById('skillsProfissionais')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function atualizarIdioma(profileData) {
    const idioma = document.getElementById('idiomasId')
    idioma.innerHTML = profileData.languages.map(idiomaFalado => `<li>${idiomaFalado}</li>`).join('')
}

function atualizarProjetos(profileData) {
    const projetos  = document.getElementById('projetosId')
    projetos.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <span ${project.github ? 'class="title github"' : ''}>${project.name}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function atualizarExperienciaProfissional(profileData) {
    const experiencia = document.getElementById('lista-experienssiaId')
    experiencia.innerHTML = profileData.professionalExperience.map(exProfissional => 
            `
            <li>
                <span class="title">${exProfissional.name}</span>
                <span class="data">${exProfissional.period}</span>
                <p>${exProfissional.description}</p>
            </li>
            `
        ).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    atualizarPerfil(profileData)
    atualizarSkills(profileData)
    atualizarHardSkills(profileData)
    atualizarIdioma(profileData)
    atualizarProjetos(profileData)
    atualizarExperienciaProfissional(profileData)
})() 



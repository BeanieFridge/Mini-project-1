
function changeTranscendantText(){
    document.getElementById('championAbilityName').innerHTML = 'Transcendant'
    document.getElementById('championAbilityDescription').innerHTML = 'Syndra collects up to 120 Splinters of Wrath via damaging enemy champions and gaining levels. Splinters of Wrath enhance Syndra and her abilities. Syndra restores Mana whenever she collects a Splinter from an enemy.At 120 Splinters, Syndra gains 15% Total AP.Syndra can gain Splinters of Wrath from the following Damaging an enemy champion with 2 abilities within 4 seconds grants SplintersSyndra will receive 5 Splinters of Wrath when she levels upKilling a Cannon minion grants 1 Splinter of Wrath'
}


function changeDarkSphereText(){
    document.getElementById('championAbilityName').innerHTML = 'Dark Sphere'
    document.getElementById('championAbilityDescription').innerHTML = "Syndra conjures a Dark Sphere dealing magic damage. The sphere remains for 6 seconds and can be manipulated by Syndra's other abilities.Upon collecting 40 Splinters of Wrath, Dark Sphere now stores 2 charges (1.25-second static cooldown)."
}

function changeForceOfWillText(){
    document.getElementById('championAbilityName').innerHTML = 'Force of Will'
    document.getElementById('championAbilityDescription').innerHTML = "First Cast: Grabs target Dark Sphere or enemy minion. If no target is selected, grabs nearest Dark Sphere. Second Cast: Throws grabbed unit. Enemies hit take magic damage and are slowed by 25% for 1.5 seconds. Upon collecting 60 Splinters of Wrath, Force of Will now deals 12%(+2% per 100) bonus true damage."
}

function changeScatterTheWeakText(){
    document.getElementById('championAbilityName').innerHTML = 'Scatter The Weak'
    document.getElementById('championAbilityDescription').innerHTML = "Active: Knocks enemies and Dark Spheres back dealing magic damage to them and any enemies they collide with. Dark Spheres that are knocked back stun all enemies in their path for 1.25 seconds. Upon collecting 80 Splinters of Wrath, Scatter the Weak's scatter angle is now 84° and slows enemies by 70% for 1.25 seconds after the initial stun and knockback."
}

function changeUnleashedPowerText(){
    document.getElementById('championAbilityName').innerHTML = 'Unleashed Power'
    document.getElementById('championAbilityDescription').innerHTML = "Passive: Dark Sphere gains Ability Haste, stacking additively with other sources. Active: Draws upon Syndra's full cataclysmic power, harnessing all Dark Spheres to deal magic damage to target enemy Champion. Unleashed Power manipulates the three Dark Spheres orbiting Syndra, in addition to Dark Spheres previously created. Upon collecting 100 Splinters of Wrath, Unleashed Power now executes enemies below 15% health."
}
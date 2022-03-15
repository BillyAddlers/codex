<template>
  <div id="content_test">
    <div class="codex-container">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <h1>Guardian</h1>
          <span>A Brave Warrior</span>
          <div class="text-black text-lg text-left py-5">
            Guardian is a well-balanced DPS and Tank class. It is one of 15
            classes available to pick on Codex, and one of the few classes that
            utilizes
            <i>Butsuri-kougeki</i> (Physical Attack).
          </div>

          <h3>Overview</h3>
          <div class="text-black text-lg text-left py-5">
            With the highest defense stats out of the fifteen classes, the
            Guardian has the ability to hold back enemies and is usually the
            cornerstone of the front line. One of the main roles of the Guardian
            is to draw the attention of the enemy and take the most damage of
            the group. Guardians can equip nearly all kinds of armor and
            weapons, but most players choose heavy plate armor, a shield, and a
            one-handed weapon (such as a sword, axe or mace), as this
            configuration best suits a Guardian's strengths and battle role.
            <br />
            <br />
            The Guardian class supports the front line and has many skills to
            draw aggro. For example, the Guardian is the only class that has
            multiple skills for the shield as well as skills that nullify damage
            for a set amount of time. However, the Guardian's potential to
            directly deal damage is not very high. A Guardian needs high quality
            gear to be useful, which is one of the class' main weaknesses.
          </div>
        </div>
        <div class="codex-img">
          <v-img src="classes/guardian.png" alt="Guardian's Icon" />
        </div>
      </div>
      <h3>Advanced Builds</h3>
      <div class="text-black text-lg text-left py-5">
        There are few Advanced Builds that's commonly used by Guardian.
      </div>
      <h4>Ramming Battery</h4>
      <span
        >One of the most easiest Advanced Builds to build, since it takes no
        specific equipment and just need a Light to Medium Shield and a
        One-Handed Melee Weapon to function.</span
      >
      <h4>Immovable Fortress</h4>
      <span>
        A full-defense build for Guardian. It is centered on the usage of Heavy
        Shield (Quoratum) and a One-Handed Melee Weapon. It has a specific
        stance skill that makes Guardian less susceptible to damage while not
        moving.
      </span>
      <h4>Berserker</h4>
      <span>
        By sacrificing its offhand gear, they obtain capability of wielding
        Two-Handed Melee Weapon. It compensates for damage taken by absorbing
        incoming damages via counterattacks.
      </span>
      <h4>Juggernaut</h4>
      <span>
        A specific build that emphasize continuous usage of short-cooldown
        skills via skill haste gears, rather than normal attacks. Similar to
        Berserker, it needs to have a specifiic equipment in order to fully
        function.
      </span>
      <br /><br />
      <h3>Stat Scaling</h3>
      <span>Coming Soon</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@tailwind components

@layer components
  .codex-container
    @apply relative container p-14 mx-auto bg-gray-light rounded-lg #{!important}
    h4
      @apply pt-2 #{!important}
</style>

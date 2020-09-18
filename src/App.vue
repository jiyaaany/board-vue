<template>
    <div id="app" style="position:relative;">
        <div>
            <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
                <b-navbar-brand :to="{ name: 'Home' }">Board Vue Cli</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item v-if="!$root.isWriting" :to="{ name: 'Form' }">글쓰기</b-nav-item>
                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view style="padding-top: 56px;" />
    </div>
</template>

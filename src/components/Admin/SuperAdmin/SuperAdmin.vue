<template>
  <div>
    <h1>Liste des Admins</h1>
    <br />
    <b-card-group deck>
      <b-card
        id="adminCardEdit"
        v-for="element in adminList"
        :key="element.id"
        :title="element.name"
        :img-src="element.url"
        img-alt="photo"
        img-top
      >
        <b-card-text>
          <b-icon icon="envelope" variant="info" scale="1.3"></b-icon>
          <span> : {{ element.email }} </span>
        </b-card-text>
        <b-form-input v-model="newEmail[element.email]" placeholder="new email">
        </b-form-input>
        <div id="centerAdminButton">
          <b-button
            variant="info"
            v-b-popover.hover.topright="
              'Are you sure you want to change the email'
            "
            title="Change Email"
            @click="editEmailClicked(element.email)"
            >Change Email
          </b-button>
          <div v-if="element.is_super_admin === 0">
            <br />
            <b-button
              variant="danger"
              v-b-popover.hover.bottomright="
                'Are you sure you want to delete this admin'
              "
              title="Carrefull !"
              ><b-icon icon="trash" variant="light" scale="1"></b-icon> Delete
              Admin
            </b-button>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SuperAdmin",
  data: function () {
    return {
      newEmail: {},
      adminList: [],
      // header for token (back end use middleware)
      headerConfig: {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      },
    };
  },
  computed: {},
  methods: {
    async editEmailClicked(oldEmail) {
      const editAdminObject = {
        email: oldEmail,
        specify: this.newEmail[oldEmail],
      };
      await axios
        .put("http://localhost:8080/admin/", editAdminObject, this.headerConfig)
        .then((result) => {
          if (result.data.changedRows === 1) {
            axios
              .get("http://localhost:8080/admin/", this.headerConfig)
              .then((result) => {
                this.adminList = result.data;
                this.newEmail[oldEmail]= ''
              })
              .catch((error) => {
                console.log(error);
              });
          } else{
            alert("Erreru editing email")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    await axios
      .get("http://localhost:8080/admin/", this.headerConfig)
      .then((result) => {
        console.log("result", result.data);
        this.adminList = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#adminCardEdit img {
  height: 200px;
  width: 70%;
  margin: auto;
  object-fit: scale-down;
}
#centerAdminButton {
  padding-top: 20px;
  text-align: center;
}
</style>
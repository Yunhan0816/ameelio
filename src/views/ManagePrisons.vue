<template>
<div>
    <SideBarSuperUser
   name="Sarah Smith" >
        <template v-slot:body>
            <v-container>
                <h1> Manage Prisons </h1>
                <br>
                 <v-container class="grey lighten-5">
                    <v-row no-gutters>
                      <v-col
                        cols="6"
                      >
                        <v-card
                          outlined
                          tile
                        >
                        <v-card-title>
                          Prisons
                          <v-spacer></v-spacer>
                          <v-text-field
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                            v-model="search"
                          ></v-text-field>
                        </v-card-title>
                          <v-data-table
                              v-model="selected"
                              :search="search"
                              :headers="headers"
                              :items="prisons"
                              :items-per-page="5"
                              class="elevation-1">
                              <template slot="prisons" slot-scope="props">
                                  <tr>
                                  <td>{{ props.prison.prison }}</td>
                                  <td class="text-m-right">{{ props.prison.prison }}</td>
                                  <td class="text-m-right">{{ props.prison.address }}</td>
                                      </tr>
                              </template>
                              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                                  Your search for "{{ search }}" found no results.
                              </v-alert>
                          </v-data-table>
                        </v-card>
                        <br>
                         <v-card
                          outlined
                          tile
                        >
                        <v-card-title>
                          Admins
                          <v-spacer></v-spacer>
                          <v-text-field
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                            v-model="search"
                          ></v-text-field>
                        </v-card-title>
                          <v-data-table
                              v-model="selected"
                              :search="search"
                              :headers="headers"
                              :admins="admins"
                              :items-per-page="5"
                              class="elevation-1">
                              <template slot="admins" slot-scope="props">
                                  <tr>
                                  <td>{{ props.admin.name }}</td>
                                  <td class="text-m-right">{{ props.admin.name }}</td>
                                  <td class="text-m-right">{{ props.admin.phone }}</td>
                                      </tr>
                              </template>
                              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                                  Your search for "{{ search }}" found no results.
                              </v-alert>
                          </v-data-table>
                        </v-card>
                      </v-col>
                       <v-spacer></v-spacer>
                      <v-col
                        cols="5"
                      >
                        <v-card
                          outlined
                          tile
                        >
                        <v-card-title>
                          Inmates
                          <v-spacer></v-spacer>
                          <v-text-field
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                            v-model="search"
                          ></v-text-field>
                        </v-card-title>
                          <v-data-table
                              v-model="selected"
                              :search="search"
                              :headers="headers"
                              :admins="admins"
                              :items-per-page="5"
                              class="elevation-1">
                              <template slot="admins" slot-scope="props">
                                  <tr>
                                  <td>{{ props.admin.name }}</td>
                                  <td class="text-m-right">{{ props.admin.name }}</td>
                                  <td class="text-m-right">{{ props.admin.phone }}</td>
                                      </tr>
                              </template>
                              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                                  Your search for "{{ search }}" found no results.
                              </v-alert>
                          </v-data-table>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
            </v-container>

        </template>
    </SideBarSuperUser>
</div>
</template>

<script>
import SideBarSuperUser from '../components/SideBarSuperUser'
export default {
    name: 'manage-prisons',
    components: {
      SideBarSuperUser
  },
    data (){
      return{
      isExpanded: false,
      search:'',
      headers: [
          {
              text: 'Prison',
              value:'prison'
          },
          {
              text: 'Address',
              value:'address'
          },
          // {
          //   text:'name',
          //   value:'name'
          // },
          // {
          //   text: 'Phone Number',
          //   value: 'phone'
          // }

      ],
      prisons: [
          {
              prison: "Demo County Prison",
              address:"49 Anderson Blvd, Stoughton, WI, 02345"
          },
          {
              prison: "State Prison",
              address:"110 Yellow Brick Road, Kings, WA, 02345"
          },
          {
              prison: "County Prison",
              address:"11 Hello World, Boston, MA, 02215"
          },
      ],
      admins: [
          {
              prison: "Demo County Prison",
              address:"49 Anderson Blvd, Stoughton, WI, 02345"
          },
          {
              prison: "State Prison",
              address:"110 Yellow Brick Road, Kings, WA, 02345"
          },
          {
              prison: "County Prison",
              address:"11 Hello World, Boston, MA, 02215"
          },
      ]
    }
    
  }
};
</script>
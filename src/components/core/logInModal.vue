<template>
    <div class="modal" ref="modal">
                  <div class="modal-content">
                    <div style="display: flex;">
                        <div style="width: 100%">
                            <h5 style="text-align: center; padding:10px" class="modal-title" id="exampleModalLabel">
                                Login as
                            </h5>
                        </div>
                        <div style="padding-top:10px; padding-right:10px"><i  aria-label="Close"
                                class="fa fa-times"></i>
                        </div>
                    </div>
  
  
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12" style="text-align: center; margin-bottom: 10px">
                                <router-link style="padding-right:10px" to="/client-log-in"><button
                                        style="background-color: #2575fc; color:white; width:150px" type="button"
                                        class="btn btn-primary"><i class="fa fa-user" ></i>
                                        Client</button></router-link>
                                <router-link to="/freelancer-log-in"><button
                                        style="background-color: #02060b; color:white;width:150px" type="button"
                                        class="btn btn-primary"><i class="fa fa-graduation-cap"></i>
                                        Freelancer</button></router-link>
                            </div>
                        </div>
                    </div>
                  </div>
        </div>
</template>

<script>
export default {
name: "logInModal",
}
</script>


<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    position: absolute;
    width: 100%;
    height:100%;
    top: 0;
}
.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 500px;
    padding: 40px 30px;
    background-color: #fff ;
}
</style>
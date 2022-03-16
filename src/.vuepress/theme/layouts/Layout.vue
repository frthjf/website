<template>
  <Layout>
    <template #sidebar-bottom>
      <ul class="sidebar-items">
        <li>
          <span
            class="
              sidebar-item
              router-link-active router-link-exact-active
              active
            "
            >&nbsp;
          </span>
        </li>
        <li>
          <a
            class="sidebar-item"
            href="https://drive.google.com/file/d/1NAvtlORsC4J1961VoOO6FLPN2V1FHUZk/view?usp=sharing"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li>
          <a
            class="sidebar-item"
            href="https://github.com/frthjf"
            target="_blank"
          >
            GitHub.com
          </a>
        </li>
        <li>
          <a
            class="sidebar-item"
            href="https://scholar.google.com/citations?hl=en&user=n8fv7j4AAAAJ"
            target="_blank"
          >
            <span>Google Scholar</span>
          </a>
        </li>
        <li>
          <a
            class="sidebar-item"
            href="https://www.linkedin.com/in/frithjof-gressmann-6a1606229/"
            target="_blank"
          >
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<script>
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
